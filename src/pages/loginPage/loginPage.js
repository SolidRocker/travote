import React, {Component} from 'react';
import Login from '../../components/login/login';
import './loginPage.scss'

class LoginPage extends Component {

    render() {
        document.body.style = 'background: rgb(0, 166, 188);';
        return (
        <div className="login-container">
            <div className="login-mainHeader">TRAVOTE</div>
            <div className="login-subtitle">Community-driven travel recommendations</div>
            <Login/>
        </div>
        );
    }
}

export default LoginPage;