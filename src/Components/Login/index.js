import app from "../../base";
import React, { Component } from "react";
import { withRouter } from "react-router";

import LoginInView from "./LoginInView";

class LoginContainer extends Component {

    handleSignUp = async event => {

        event.preventDefault();

        const { email, password } = event.target.elements;

        try {
            const user = await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
            this.props.history.push("/");

        } catch (error) {
            alert(error);
        }
    };

    render() {
        return <LoginInView onSubmit={this.handleSignUp } />;
    }

}

export default withRouter(LoginContainer);
