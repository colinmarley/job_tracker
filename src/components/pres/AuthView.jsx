import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import {ToastsStore} from 'react-toasts';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

class AuthView extends Component {

    signUp(e) {

        let email = document.getElementById('email').value;
        let pw = document.getElementById('password').value;

        ToastsStore.success(`Sign Up Button Clicked\nEmail: ${email}\nPassword: ${pw}`);
    }

    signIn(e) {
        let email = document.getElementById('email').value;
        let pw = document.getElementById('password').value;

        ToastsStore.success(`Sign In Button Clicked\nEmail: ${email}\nPassword: ${pw}`);
    }

    render() {


        return (
            <div className="auth-view-root">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"/>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password"/>
                <br/>
                <button onClick={e => this.signUp(e)} id="signUpBtn">Sign Up</button>
                <button onClick={e => this.signIn(e)} id="signInBtn">Sign In</button>

                <div id="firebaseui-auth-container"></div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthView);