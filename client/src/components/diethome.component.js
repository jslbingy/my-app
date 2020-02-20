import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GLOBALS from "../helpers/global"

export default class Foodhome extends Component {
    constructor(props) {
        super(props)

        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onQuerySubmit = this.onQuerySubmit.bind(this);
        //this.onChangeAnswer = this.onChangeAnswer.bind(this);

        this.state = {
            query: '',
            answer: ''
        }
    }

    onChangeQuery(e) {
        this.setState({ query: e.target.value })
    }

    onQuerySubmit(e) {
        e.preventDefault()
        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_SPOONACULAR,
            "x-rapidapi-key": GLOBALS.KEY
        };
        const params = {
            "q": this.state.query
        };

        axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer', { params, headers })
            .then((res) => {
                this.setState({ answer: res.data.answer });
            }).catch((error) => {
                throw error;
            });
    }


    render() {
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
                    <form onSubmit={this.onQuerySubmit}>
                        <label>Quick Answer: (eg. how much Vitamin C in two apples?)</label>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <input
                                    name="query"
                                    className="form-control"
                                    placeholder="Enter your question here"
                                    value={this.state.query}
                                    onChange={this.onChangeQuery} />
                            </div>
                            <div className="form-group col-md-2">
                                <button type="submit" className="btn btn-primary btn-block">Ask</button>
                            </div>
                        </div>
                        <label>Answer:</label>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input
                                    name="query"
                                    readOnly="readonly"
                                    className="form-control"
                                    placeholder="Quick answer will be displayed here"
                                    value={this.state.answer} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}