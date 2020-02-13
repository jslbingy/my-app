import React, { Component } from "react";
import { getJwt } from "../helpers/jwt";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Authentication extends Component {
    constructor(props) {
        super(props);

        const jwt = getJwt();
        if (!jwt) {
            this.state = {
                id: undefined,
                username: undefined
            }
            this.props.history.push('/sign-in');
        }
        else {
            let token = JSON.parse(jwt);
            this.state = {
                id: token.id,
                username: token.username
            };
        }
    };

    render() {
        if (this.state.username === undefined) {
            return (
                <div>
                    <h1>No Access! Please register or login</h1>
                    <div><Link to={"/sign-up"}>Register</Link></div>
                    <div><Link to={"/sign-in"}>Login</Link></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default withRouter(Authentication);