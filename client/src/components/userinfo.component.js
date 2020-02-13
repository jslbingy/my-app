import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from "moment";

export default class Userinfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const dateObj = {
            date: this.state.date
        }
        axios.post('', dateObj)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAge">Age</label>
                            <input type="number" className="form-control" id="inputAge" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputGender">Gender</label>
                            <select id="inputGender" className="form-control" defaultValue={'male'}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHeight">Height</label>
                            <input type="number" step="0.01" className="form-control" id="inputHeight" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWeight">Weight</label>
                            <input type="number" step="0.01" className="form-control" id="inputWeight" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputAllergens">Allergic History(Please check the box if you are allergic)</label>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckboxCorn" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckCorn">Corn Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/CornAllergy-TypesOfFoodAllergies.png" alt="Corn" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckEgg" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckEgg">Egg Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/EggAllergy-TypesOfFoodAllergies.png" alt="Egg" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckFish" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckFish">Fish Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/FishAllergy-TypesOfFoodAllergies.png" alt="Fish" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckMeat" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckMeat">Meat Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/MeatAllergy-TypesOfFoodAllergies.png" alt="Meat" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckMilk" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckMilk">Milk Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/MilkAllergy-TypesOfFoodAllergies.png" alt="Milk" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckPeanut" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckPeanut">Peanut Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/food-allergy.png" alt="Peanut" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckShellfish" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckShellfish">Shellfish Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/ShellfishAllergy-TypesOfFoodAllergies.png" alt="Shellfish" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckSoy" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckSoy">Soy Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/SoyAllergy-TypesOfFoodAllergies.png" alt="Soy" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckTreenut" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckTreenut">Tree Nut Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/TreeNutAllergy-TypesOfFoodAllergies.png" alt="Tree Nut" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckWheat" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckWheat">Wheat Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/WheatAllergy-TypesOfFoodAllergies.png" alt="Wheat" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckFpies" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckFpies">FPIES Allergic</label>
                                <img className="allergen-img" src="https://acaai.org/images/FPIES-TypesOfFoodAllergies.png" alt="FPIES" />
                            </div>
                        </div>
                    </div>
                    <div style={{ "marginTop": "15px" }}>
                        <button type="submit" className="btn btn-primary col-md-12">Submit</button>
                    </div>
                </form>
            </div >
        );
    }
}