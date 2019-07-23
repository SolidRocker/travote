import React, {Component} from 'react';
import Login from '../../components/login/login';
import './loginPage.scss'

class LoginPage extends Component {

    render() {
        document.body.style = 'background: rgb(0, 166, 188);';
        return (
        <div className="login-container">
            <div className="mainHeader">TRAVOTE</div>
            <div className="subtitle">Community-driven travel recommendations</div>
            <Login/>
        </div>
        );
    }
}

export default LoginPage;