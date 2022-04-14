import React from 'react';
import { NavLink } from 'react-router-dom';
// import {useState} from 'react';
// import {Home} from './Home';
const Login = () => {

    return (
        <>
            <div className="signup-block login-block">
                <div className="container form-control signup login">

                    <span>Welcome !</span>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="name@example.com" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            />
                        </div>
                        <div className="form-group mb-3 sign-up log-in">
                            <button type = "submit">Log in</button>
                        </div>

                        <div className="for-login for-signup">
                            <div className="d-flex justify-content-center">Don't have an account ?<li><NavLink to="/signup"> Sign up</NavLink></li></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login