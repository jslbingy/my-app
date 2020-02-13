import React, { Component } from "react";
import { Link } from "react-router-dom";
import cheeseCake from "../../images/food/cheese_cake.jpg";
import spaghetti from "../../images/food/spaghetti.jpg";
import pizza from "../../images/food/pizza.jpg";



export default class Foodhome extends Component {
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
                        <h5>Please select food image for food analysis</h5>
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-food" src={cheeseCake} alt="Cheese Cake" />
                                <div className="card-body">
                                    <h6 className="card-title">Cheese Cake</h6>
                                    <button type="button" className="btn btn-outline-primary">Analyze</button>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-food" src={pizza} alt="Pizza" />
                                <div className="card-body">
                                    <h6 className="card-title">Pizza</h6>
                                    <button type="button" className="btn btn-outline-primary">Analyze</button>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-food" src={spaghetti} alt="Spaghetti" />
                                <div className="card-body">
                                    <h6 className="card-title">Spaghetti</h6>
                                    <button type="button" className="btn btn-outline-primary">Analyze</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h5>Or upload own food image</h5>
                        <form>
                            <div className="form-group">
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                <button type="button" className="btn btn-outline-primary" style={{ "float": "right" }}>Analyze</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}