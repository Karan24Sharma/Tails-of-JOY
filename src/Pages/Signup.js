import React from 'react'
// import LoginPage from './Login';
import { NavLink } from 'react-router-dom'
// import {useRef} from 'react'
const Signup = () => { 

    return (
        <>
            <div className="signup-block">
                <div className="container form-control signup">
                    <span>New Here !</span>
                    <form>
                        <div className="form-group mb-3 ">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="name" 
                            className="form-control" 
                            placeholder="Your Name" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="name@example.com" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
                            <input type="phone" 
                            className="form-control"  
                            placeholder="999*******" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" 
                            className="form-control"
                            />
                        </div>
                        <div className="form-group sign-up">
                            <button type="submit">Sign up</button>
                        </div>

                        <div className="for-login my-3">
                            <div className="d-flex justify-content-center text">Already have an account ?<li><NavLink to="/login"> Log in</NavLink></li></div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup