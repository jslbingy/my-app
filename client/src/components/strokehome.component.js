import React, { Component } from "react";
import { Link } from "react-router-dom";
import age from "../../images/stroke/age_stroke.png"
import avg_glucose_level from "../../images/stroke/avg_glucose_level_stroke.png"
import bmi from "../../images/stroke/bmi_stroke.png"
import gender from "../../images/stroke/gender_stroke.png"
import heart_disease from "../../images/stroke/heart_disease_stroke.png"
import hypertension from "../../images/stroke/hypertension_stroke.png"
import marriage from "../../images/stroke/marriage_stroke.png"
import residence_type from "../../images/stroke/residence_type_stroke.png"
import smoking_status from "../../images/stroke/smoking_status_stroke.png"
import work_type from "../../images/stroke/work_type_stroke.png"

export default class Strokehome extends Component {
    render() {
        return (
            <div>
                <div className="fixed-top">
                    <nav className="navbar navbar-expand-lg navbar-light">
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
                    <div className="strokehome">
                        <div style={{ "float": "right" }} >
                            <Link className="btn btn-primary" style={{ "fontSize": "20px" }} to={"/strokeform"}>Detect Stroke</Link>
                        </div>
                        <div>
                            <h6 style={{ "fontSize": "bold" }}>Stroke condition relationship with different factors</h6>
                            <p className="pstrokehome" style={{ "fontSize": "15px", "fontFamily": "'Fira Sans', sans-serif" }}>Analysis is based on a dataset of 783 stroke cases</p>
                        </div>
                    </div>
                </div>
                <div className="strokehomewrapper scroll">
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-stroke" src={age} alt="age_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Age vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={avg_glucose_level} alt="avg_glucose_level_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Avg Glucose Level vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={bmi} alt="bmi_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">BMI vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={gender} alt="gender_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Gender vs Stroke</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-stroke" src={heart_disease} alt="heart_disease_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Heart Disease vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={hypertension} alt="hypertension_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Hypertension vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={marriage} alt="marriage_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Marriage vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={residence_type} alt="residence_type_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Residence Type vs Stroke</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-stroke" src={smoking_status} alt="smoking_status_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Smoking Status vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src={work_type} alt="work_type_stroke" />
                            <div className="card-body">
                                <h6 className="card-title">Work Type vs Stroke</h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src="" alt="" />
                            <div className="card-body">
                                <h6 className="card-title"></h6>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-stroke" src="" alt="" />
                            <div className="card-body">
                                <h6 className="card-title"></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}