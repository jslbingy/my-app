import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Strokeform extends Component {
    constructor(props) {
        super(props);

        this.onChangeAgl = this.onChangeAgl.bind(this);
        this.onChangeHeartDisease = this.onChangeHeartDisease.bind(this);
        this.onChangeHypertension = this.onChangeHypertension.bind(this);
        this.onChangeWorkType = this.onChangeWorkType.bind(this);
        this.onChangeResidenceType = this.onChangeResidenceType.bind(this);
        this.onChangeSmokingStatus = this.onChangeSmokingStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            agl: '',
            heart_disease: 'No',
            hypertension: 'No',
            work_type: 'private',
            residence_type: 'urban',
            smoking_status: 'smokes'
        };
    }

    onChangeAgl(e) {
        this.setState({ agl: e.target.value });
    };

    onChangeHeartDisease(e) {
        this.setState({ heart_disease: e.target.value });
    };

    onChangeHypertension(e) {
        this.setState({ hypertension: e.target.value });
        // console.log(e.target.value);
        // console.log(typeof (e.target.value));
        // console.log(this.state);
    };

    onChangeWorkType(e) {
        this.setState({ work_type: e.target.value });
        // console.log(e.target.value);
        // console.log(typeof (e.target.value));
        // console.log(this.state);
    };

    onChangeResidenceType(e) {
        this.setState({ residence_type: e.target.vaule });
        // console.log(e.target.value);
        // console.log(typeof (e.target.value));
        // console.log(this.state);
    };

    onChangeSmokingStatus(e) {
        this.setState({ smoking_status: e.target.vaule });
        // console.log(e.target.value);
        // console.log(typeof (e.target.value));
        // console.log(this.state);
    };

    handleSubmit(e) {
        e.preventDefault();

        let obj = {
            agl: this.state.agl,
            heart_disease: this.state.heart_disease,
            hypertension: this.state.hypertension,
            work_type: this.state.work_type,
            residence_type: this.state.residence_type,
            smoking_status: this.state.smoking_status
        }

        console.log(obj);

        let local = JSON.parse(localStorage.getItem("token"));
        axios.defaults.headers.common['Authorization'] = local.token;
        axios.post('http://localhost:9000/api/user_info/stroke', obj)
            .then((res) => {
                console.log(res.data);
                // TODO
            }).catch((error) => {
                throw error;
            });
    };

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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAgl">Average Glucose Level (measured after meal)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                id="inputAgl"
                                placeholder="Average Glucose Level"
                                value={this.state.agl}
                                onChange={this.onChangeAgl} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHeartDisease">Do you suffer from heart disease?</label>
                            <select
                                className="form-control"
                                defaultValue={this.state.heart_disease}
                                onChange={this.onChangeHeartDisease}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHypertension">Do you suffer from hypertension?</label>
                            <select
                                className="form-control"
                                defaultValue={this.state.hypertension}
                                onChange={this.onChangeHypertension}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWorkType">Work Type</label>
                            <select
                                className="form-control"
                                defaultValue={this.state.work_type}
                                onChange={this.onChangeWorkType}>
                                <option value="children">children</option>
                                <option value="govt job">govt_job</option>
                                <option value="private">private</option>
                                <option value="self-employed">self-employed</option>
                                <option value="never worked">never worked</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputResidenceType">Residence Type</label>
                            <select
                                id="inputResidenceType"
                                className="form-control"
                                defaultValue={this.state.residence_type}
                                onChange={this.onChangeResidenceType}>
                                <option value="urban">urban</option>
                                <option value="rural">rural</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSmokingStatus">Smoking Status</label>
                            <select
                                className="form-control"
                                defaultValue={this.state.smoking_status}
                                onChange={this.onChangeSmokingStatus}>
                                <option value="never smoked">never smoked</option>
                                <option value="formerly smoked">formerly smoked</option>
                                <option value="smokes">smokes</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ "marginTop": "15px" }}>
                        <button type="submit" className="btn btn-primary col-md-12">Detect Stroke</button>
                    </div>
                </form>
            </div >
        )
    }
}