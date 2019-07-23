import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './login.scss'

class Login extends Component {

    render() {
        return(
            <div className="background">
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
                <div className="middle-text-or">or</div>
                <Link to="/mapoverview" style={{textDecoration: 'none'}}> <div className="button-sign-up">Sign Up</div> </Link>
            </div>
        );
    }
}

export default Login;