import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }

        localStorage.removeItem('token');
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost:9000/api/general/account/register', userObject)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', JSON.stringify(res.data.data));
                    this.props.history.push('/userinfo');
                }
                else if (res.status === 402) {
                    this.setState({
                        username: '',
                        password: ''
                    })
                }
            }).catch((error) => {
                throw error;
            });

        //this.setState({ username: '', password: '' })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <form onSubmit={this.onSubmit}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            placeholder="Enter username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form>
            </div>
        );
    }
}
