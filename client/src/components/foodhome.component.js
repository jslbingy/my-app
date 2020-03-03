import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GLOBALS from "../helpers/global";

export default class Foodhome extends Component {
    constructor(props) {
        super(props)

        this.onChangeImage = this.onChangeImage.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.getAnalysis = this.getAnalysis.bind(this);
        this.getFoodLabel = this.getFoodLabel.bind(this);

        this.state = {
            image: null,
            selected: false,
            loaded: false,
            analyzed: false,
            url: '',
            recognitions: '',
            showImage: false,
            confirmKeyword: false,
            keyword: '',
            labels: ''
        };
    }

    onChangeImage(e) {
        this.setState({ image: e.target.files[0], selected: true });
    }

    getUrl(e) {
        e.preventDefault();

        let authorization = 'Client-ID ' + GLOBALS.CLIENT_ID

        var myHeaders = new Headers();
        myHeaders.append("Authorization", authorization);

        var formdata = new FormData();
        formdata.append("image", this.state.image);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(GLOBALS.IMGUR_URL, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                let data = JSON.parse(result);
                this.setState({ url: data.data.link, selected: false, loaded: true, showImage: true });
            })
            .catch(error => console.log('error', error));
    };

    getAnalysis(e) {
        e.preventDefault();

        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_EVERY_PIXEL,
            "x-rapidapi-key": GLOBALS.KEY
        };
        const params = {
            "url": this.state.url
        };

        axios.get(GLOBALS.EVERY_PIXEL_URL, { params, headers })
            .then((res) => {
                console.log(res.data);
                this.setState({ recognitions: res.data, analyzed: true, loaded: false })
            }).catch((error) => {
                throw error;
            });
    };

    getFoodLabel(e) {
        e.preventDefault();
        let keyword = e.target.value;
        this.setState({ keyword: keyword });

        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_EDAMAM_NUTRITION,
            "x-rapidapi-key": GLOBALS.KEY
        }
        const params = {
            "ingr": keyword
        };

        axios.get(GLOBALS.EDAMAM_NUTRITION_URL, { params, headers })
            .then((res) => {
                console.log(res.data);
                this.setState({ labels: res.data, analyzed: false, confirmKeyword: true })
                console.log(this.state.labels)
            }).catch((error) => {
                throw error;
            });
    }

    render() {
        let count = 0;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/foodhome"}>Food Analyser</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/diethome"}>Diet Helper</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/strokehome"}>Stroke Detector</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <div>
                        <h5>upload food image</h5>
                        <form>
                            <div className="form-group">
                                <input
                                    type="file"
                                    name="file"
                                    className="form-control-file"
                                    onChange={this.onChangeImage} />
                                {this.state.selected &&
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ "float": "right" }}
                                        onClick={this.getUrl}
                                    >Upload</button>
                                }
                                <div>
                                    {this.state.showImage &&
                                        <img src={this.state.url} className="foodAnalyser"></img>
                                    }
                                    {this.state.loaded &&
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ "float": "right" }}
                                            onClick={this.getAnalysis}
                                        >Analyze</button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.state.analyzed &&
                    <div>
                        <div>Food Recognition Probability Table</div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Predict Label</th>
                                    <th>Probability</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.recognitions.keywords.map(kw => {
                                    if (!GLOBALS.NORMAL_KW.includes(kw.keyword) && count <= 10) {
                                        count++;
                                        return <tr>
                                            <td>{kw.keyword}</td>
                                            <td>{kw.score}</td>
                                            <td>
                                                <button
                                                    onClick={this.getFoodLabel}
                                                    className="btn btn-link"
                                                    value={kw.keyword}
                                                >Confirm & Get Analysis</button>
                                            </td>
                                        </tr>
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                }
                {this.state.confirmKeyword &&
                    <div>
                        <div className="form-row" >
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                Health & Nutrition Labels:
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <ul>
                                    {this.state.labels.healthLabels.map(label => {
                                        label = label.toLowerCase().split('_').join(' ');
                                        return <li>{label}</li>
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}