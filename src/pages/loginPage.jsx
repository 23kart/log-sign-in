import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './loginPage.css'

export default function LoginPage(){

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox

    const [errors, setErrors] = useState({
        email: { required: false, invalid: false },
        password: { required: false },
        custom_error: null,
    });

    // Handle input field changes
    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    // Handle Remember Me checkbox
    const handleRememberMe = (event) => {
        setRememberMe(event.target.checked);
    };

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        let hasError = false;
        let currentErrors = {
            email: { required: false, invalid: false },
            password: { required: false },
            custom_error: null,
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputs.email === "") {
            currentErrors.email.required = true;
            hasError = true;
        } else if (!emailRegex.test(inputs.email)) {
            currentErrors.email.invalid = true;
            hasError = true;
        }

        if (!inputs.password) {
            currentErrors.password.required = true;
            hasError = true;
        }

        setErrors(currentErrors);

        if (!hasError) {
            console.log('Form Submitted Successfully!');
            console.log('Inputs:', inputs);
            console.log('Remember Me:', rememberMe);
            navigate('/main');
        }
    };

    return(
        <section className="login-block">
                <div className="container">
                    <div className="row ">
                        <div className="col login-sec">
                            <h2 className="text-center">Login</h2>
                            <form onSubmit={handleSubmit} className="login-form" action="">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                                <input type="email"  className="form-control" onChange={handleInput} name="email"  id="" placeholder="email"  />
                                { errors.email.required?
                                (<span className="text-danger" >
                                    Email is required.
                                </span>):null
                                }
                                {errors.email.invalid && (
                                        <span className="text-danger">Invalid email address.</span>
                                    )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                <input  className="form-control" type="password" onChange={handleInput}  name="password" placeholder="password" id="" />
                                { errors.password.required?
                                (<span className="text-danger" >
                                    Password is required.
                                </span>):null
                                }
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={handleRememberMe}
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember Me
                                </label>
                            </div>
                            <div className="form-group">
                                <span className="text-danger" >
                                { errors.custom_error?
                                (<p>{errors.custom_error}</p>)
                                :null
                                }
                                </span>
                                <input  type="submit" className="btn btn-login float-right"   value="Login" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="form-group">
                            Don't have an account? Please <Link  to="/signup">Sign-Up</Link>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}