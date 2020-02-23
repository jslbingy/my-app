import React, { Component } from "react";
import axios from 'axios';
import URLS from "../helpers/global"

export default class Userinfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
            gender: 'male',
            isMarried: 'No',
            height: '',
            weight: '',
            corn: false,
            egg: false,
            fish: false,
            meat: false,
            milk: false,
            peanut: false,
            shellfish: false,
            soy: false,
            tree_nut: false,
            wheat: false,
            fpies: false
        };

        this.toggleChangeCorn = this.toggleChangeCorn.bind(this);
        this.toggleChangeEgg = this.toggleChangeEgg.bind(this);
        this.toggleChangeFish = this.toggleChangeFish.bind(this);
        this.toggleChangeMeat = this.toggleChangeMeat.bind(this);
        this.toggleChangeMilk = this.toggleChangeMilk.bind(this);
        this.toggleChangePeanut = this.toggleChangePeanut.bind(this);
        this.toggleChangeShellfish = this.toggleChangeShellfish.bind(this);
        this.toggleChangeSoy = this.toggleChangeSoy.bind(this);
        this.toggleChangeTreenut = this.toggleChangeTreenut.bind(this);
        this.toggleChangeWheat = this.toggleChangeWheat.bind(this);
        this.toggleChangeFpies = this.toggleChangeFpies.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMarriage = this.onChangeMarriage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeAge(e) {
        this.setState({ age: e.target.value })
    }

    onChangeGender(e) {
        this.setState({ gender: e.target.value })
    }

    onChangeMarriage(e) {
        this.setState({ isMarried: e.target.value })
    }

    onChangeHeight(e) {
        this.setState({ height: e.target.value })
    }

    onChangeWeight(e) {
        this.setState({ weight: e.target.value })
    }

    toggleChangeCorn = () => {
        this.setState({ corn: !this.state.corn })
    }

    toggleChangeEgg = () => {
        this.setState({ egg: !this.state.egg })
    }

    toggleChangeFish = () => {
        this.setState({ fish: !this.state.fish })
    }

    toggleChangeMeat = () => {
        this.setState({ meat: !this.state.meat })
    }

    toggleChangeMilk = () => {
        this.setState({ milk: !this.state.milk })
    }

    toggleChangePeanut = () => {
        this.setState({ peanut: !this.state.peanut })
    }

    toggleChangeShellfish = () => {
        this.setState({ shellfish: !this.state.shellfish })
    }

    toggleChangeSoy = () => {
        this.setState({ soy: !this.state.soy })
    }

    toggleChangeTreenut = () => {
        this.setState({ tree_nut: !this.state.tree_nut })
    }

    toggleChangeWheat = () => {
        this.setState({ wheat: !this.state.wheat })
    }

    toggleChangeFpies = () => {
        this.setState({ fpies: !this.state.fpies })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            age: this.state.age,
            gender: this.state.gender,
            height: this.state.height,
            weight: this.state.weight,
            isMarried: this.state.isMarried,
            corn: this.state.corn,
            egg: this.state.egg,
            fish: this.state.fish,
            meat: this.state.meat,
            milk: this.state.milk,
            peanut: this.state.peanut,
            shellfish: this.state.shellfish,
            soy: this.state.soy,
            tree_nut: this.state.tree_nut,
            wheat: this.state.wheat,
            fpies: this.state.fpies
        }
        console.log(obj);

        let local = JSON.parse(localStorage.getItem("token"));
        axios.defaults.headers.common['Authorization'] = local.token;
        axios.post('http://localhost:9000/api/user_info/general', obj)
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push('/sign-in');
                }
                else if (res.status === 402) {
                    //this.setState({ password: '' })
                }
            }).catch((error) => {
                throw error;
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputAge">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputAge"
                                name="age"
                                value={this.state.age}
                                onChange={this.onChangeAge} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputGender">Gender</label>
                            <select
                                id="inputGender"
                                className="form-control"
                                defaultValue={this.state.gender}
                                onChange={this.onChangeGender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputGender">Ever Married</label>
                            <select
                                id="inputGender"
                                className="form-control"
                                defaultValue={this.state.isMarried}
                                onChange={this.onChangeMarriage}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHeight">Height(cm)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                id="inputHeight"
                                name="height"
                                value={this.state.height}
                                onChange={this.onChangeHeight} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWeight">Weight(kg)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                id="inputWeight"
                                name="weight"
                                value={this.state.weight}
                                onChange={this.onChangeWeight} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputAllergens">Allergic History(Please check the box if you are allergic)</label>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckboxCorn"
                                    checked={this.state.corn}
                                    onChange={this.toggleChangeCorn} />
                                <label className="form-check-label" htmlFor="inlineCheckCorn">Corn Allergic</label>
                                <img className="allergen-img" src={URLS.CORN_URL} alt="Corn" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckEgg"
                                    checked={this.state.egg}
                                    onChange={this.toggleChangeEgg} />
                                <label className="form-check-label" htmlFor="inlineCheckEgg">Egg Allergic</label>
                                <img className="allergen-img" src={URLS.EGG_URL} alt="Egg" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckFish"
                                    checked={this.state.fish}
                                    onChange={this.toggleChangeFish} />
                                <label className="form-check-label" htmlFor="inlineCheckFish">Fish Allergic</label>
                                <img className="allergen-img" src={URLS.FISH_URL} alt="Fish" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckMeat"
                                    checked={this.state.meat}
                                    onChange={this.toggleChangeMeat} />
                                <label className="form-check-label" htmlFor="inlineCheckMeat">Meat Allergic</label>
                                <img className="allergen-img" src={URLS.MEAT_URL} alt="Meat" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckMilk"
                                    checked={this.state.milk}
                                    onChange={this.toggleChangeMilk} />
                                <label className="form-check-label" htmlFor="inlineCheckMilk">Milk Allergic</label>
                                <img className="allergen-img" src={URLS.MILK_URL} alt="Milk" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckPeanut"
                                    checked={this.state.peanut}
                                    onChange={this.toggleChangePeanut} />
                                <label className="form-check-label" htmlFor="inlineCheckPeanut">Peanut Allergic</label>
                                <img className="allergen-img" src={URLS.PEANUT_URL} alt="Peanut" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckShellfish"
                                    checked={this.state.shellfish}
                                    onChange={this.toggleChangeShellfish} />
                                <label className="form-check-label" htmlFor="inlineCheckShellfish">Shellfish Allergic</label>
                                <img className="allergen-img" src={URLS.SHELLFISH_URL} alt="Shellfish" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckSoy"
                                    checked={this.state.soy}
                                    onChange={this.toggleChangeSoy} />
                                <label className="form-check-label" htmlFor="inlineCheckSoy">Soy Allergic</label>
                                <img className="allergen-img" src={URLS.SOY_URL} alt="Soy" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckTreenut"
                                    checked={this.state.tree_nut}
                                    onChange={this.toggleChangeTreenut} />
                                <label className="form-check-label" htmlFor="inlineCheckTreenut">Tree Nut Allergic</label>
                                <img className="allergen-img" src={URLS.TREENUT_URL} alt="Tree Nut" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckWheat"
                                    checked={this.state.wheat}
                                    onChange={this.toggleChangeWheat} />
                                <label className="form-check-label" htmlFor="inlineCheckWheat">Wheat Allergic</label>
                                <img className="allergen-img" src={URLS.WHEAT_URL} alt="Wheat" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckFpies"
                                    checked={this.state.fpies}
                                    onChange={this.toggleChangeFpies} />
                                <label className="form-check-label" htmlFor="inlineCheckFpies">FPIES Allergic</label>
                                <img className="allergen-img" src={URLS.FPIES_URL} alt="FPIES" />
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