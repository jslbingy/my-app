import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GLOBALS from "../helpers/global";

export default class Foodhome extends Component {
    constructor(props) {
        super(props)

        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeDietType = this.onChangeDietType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getNutrition = this.getNutrition.bind(this);
        this.getRecipe = this.getRecipe.bind(this);

        this.state = {
            calories: '',
            dietType: '',
            exclude: '',
            isDisplay: 'none',
            displayTitle: '',
            table: false,
            display: false,
            isNutrition: false,
            isRecipe: false,
            meals: {},
            dataDisplay: {}
        };
    }

    getExclude = async () => {
        try {
            let local = JSON.parse(localStorage.getItem("token"));
            axios.defaults.headers.common['Authorization'] = local.token;
            axios.get('http://localhost:9000/api/user_info/allergen')
                .then((res) => {
                    this.setState({ exclude: res.data.data.exclude });
                    //console.log(this.state.exclude);
                }).catch((error) => {
                    throw error;
                });
        } catch (err) {
            console.log(err.message);
        }
    }

    async componentDidMount() {
        await this.getExclude();
    }

    onChangeCalories(e) {
        this.setState({ calories: e.target.value })
    }

    onChangeDietType(e) {
        this.setState({ dietType: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_SPOONACULAR,
            "x-rapidapi-key": GLOBALS.KEY
        };
        const params = {
            "timeFrame": "week",
            "targetCalories": this.state.calories,
            "diet": this.state.dietType,
            "exclude": this.state.exclude
        };

        axios.get(GLOBALS.MEAL_PLAN, { params, headers })
            .then((res) => {
                this.setState({ meals: JSON.parse(JSON.stringify(res.data)) })
            }).catch((error) => {
                throw error;
            });

        this.setState({ isDisplay: 'none', table: true })
    }

    getNutrition(e) {
        e.preventDefault();

        let title = e.target.value;
        let titleString = 'Nutrition of ' + title + ':';
        this.setState({ displayTitle: titleString });

        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_SPOONACULAR,
            "x-rapidapi-key": GLOBALS.KEY
        };

        const params = {
            "title": title
        }

        axios.get(GLOBALS.GUESS_NUTRITION, { params, headers })
            .then((res) => {
                //console.log(res.data);
                this.setState({ dataDisplay: JSON.parse(JSON.stringify(res.data)) })
            }).catch((error) => {
                throw error;
            });

        this.setState({ isDisplay: '', display: true, isNutrition: true, isRecipe: false });
    }

    getRecipe(e) {
        e.preventDefault();

        let title = e.target.value;
        let titleString = 'Recipe of ' + title + ':';
        this.setState({ displayTitle: titleString });

        const headers = {
            "x-rapidapi-host": GLOBALS.HOST_EDAMAM,
            "x-rapidapi-key": GLOBALS.KEY
        };

        const params = {
            "q": title
        }

        axios.get(GLOBALS.RECIPE, { params, headers })
            .then((res) => {
                console.log(res.data);
                this.setState({ dataDisplay: JSON.parse(JSON.stringify(res.data)) })
            }).catch((error) => {
                throw error;
            });

        this.setState({ isDisplay: '', display: true, isNutrition: false, isRecipe: true })
        console.log(this.state);
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
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label>Target Calories Daily:</label>
                                <input
                                    name="calories"
                                    className="form-control"
                                    value={this.state.calories}
                                    onChange={this.onChangeCalories} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Diet Type (e.g. vegetarian, paleo):</label>
                                <input
                                    name="dietType"
                                    className="form-control"
                                    value={this.state.dietType}
                                    onChange={this.onChangeDietType} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <button type="submit" className="btn btn-primary btn-block">Generate</button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.state.table &&
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Day No.</th>
                                <th>Dish Name</th>
                                <th>Get Nutrition</th>
                                <th>Get Recipe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.meals.items.map(meal => {
                                let mealName = meal.slot === 1 ? 'Breakfast' : meal.slot === 2 ? 'Lunch' : 'Dinner';
                                let value = JSON.parse(meal.value);
                                return <tr>
                                    <td>Day {meal.day} {mealName}</td>
                                    <td>{value.title}</td>
                                    <td>
                                        <button
                                            onClick={this.getNutrition}
                                            className="btn btn-link"
                                            value={value.title}
                                        >Nutrition Info</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={this.getRecipe}
                                            className="btn btn-link"
                                            value={value.title}
                                        >Get Ingredient</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                }
                {this.state.display &&
                    <div style={{ "display": this.state.isDisplay }}>
                        <div className="form-row" >
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                {this.state.displayTitle}
                            </div>
                        </div>
                        {this.state.isNutrition &&
                            <div className="form-row" >
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Calories: {this.state.dataDisplay.calories.value}{this.state.dataDisplay.calories.unit}</li>
                                        <li>Fat: {this.state.dataDisplay.fat.value}{this.state.dataDisplay.fat.unit}</li>
                                        <li>Protein: {this.state.dataDisplay.protein.value}{this.state.dataDisplay.protein.unit}</li>
                                        <li>Carbs: {this.state.dataDisplay.carbs.value}{this.state.dataDisplay.carbs.unit}</li>
                                    </ul>

                                </div>
                            </div>
                        }
                        {this.state.isRecipe &&
                            <div className="form-row" >
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <ul>
                                        {this.state.dataDisplay.hits[0].recipe.ingredientLines.map(ingr => {
                                            return <li>{ingr}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}