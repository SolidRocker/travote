import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './login.scss'

class Login extends Component {

    render() {
        return(
            <div className="login-background">
                <div className="login-item">
                    <form action="" method="post" className="form form-login">

                        <div className="form-field">
                            <span className="hidden">Username</span>
                            <input id="login-username" type="text" className="form-input" placeholder="Username" required/>
                        </div>

                        <div className="form-field">
                            <span className="hidden">Password</span>
                            <input id="login-password" type="password" className="form-input" placeholder="Password" required/>
                        </div>

                        <div className="form-field">
                        <input type="submit" value="Log in"/>
                        </div>
                    </form>
                </div>
                <div className="login-middle-text-or">or</div>
                <Link to="/mapoverview" style={{textDecoration: 'none'}}> <div className="login-button-sign-up">Sign Up</div> </Link>
            </div>
        );
    }
}

export default Login;