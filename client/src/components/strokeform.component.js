import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Strokeform extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {

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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAgl">Average Glucose Level (measured after meal)</label>
                            <input type="number" step="0.01" className="form-control" id="inputAgl" placeholder="Average Glucose Level" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHeartDisease">Do you suffer from heart disease?</label>
                            <select id="inputHeartDisease" className="form-control" defaultValue={'heart_disease_yes'}>
                                <option value="heart_disease_yes">Yes</option>
                                <option value="heart_disease_no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHypertension">Do you suffer from hypertension?</label>
                            <select id="inputHypertension" className="form-control" defaultValue={'hypertension_yes'}>
                                <option value="hypertension_yes">Yes</option>
                                <option value="hypertension_no">No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWorkType">Work Type</label>
                            <select id="inputWorkType" className="form-control" defaultValue={'children'}>
                                <option value="children">children</option>
                                <option value="govt_job">govt_job</option>
                                <option value="private">private</option>
                                <option value="self-employed">self-employed</option>
                                <option value="never_worked">never worked</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputResidenceType">Residence Type</label>
                            <select id="inputResidenceType" className="form-control" defaultValue={'urban'}>
                                <option value="urban">urban</option>
                                <option value="rural">rural</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSmokingStatus">Smoking Status</label>
                            <select id="inputSmokingStatus" className="form-control" defaultValue={'never_smoked'}>
                                <option value="never_smoked">never smoked</option>
                                <option value="formerly_smoked">formerly smoked</option>
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