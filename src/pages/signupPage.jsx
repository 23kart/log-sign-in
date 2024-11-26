import React, { useState } from 'react';
import {Navigate, Link } from 'react-router-dom';
import './signupPage.css'

export default function signupPage()
{

   const initialStateErrors = {
      name:{required:false},
      email:{required:false, invalid: false},
      password:{required:false, small: false, no_capital: false},
      password2:{no_match:false},
      custom_error:null,
  };

   const [errors, setErrors] = useState(initialStateErrors);

   const [submitted, setSubmitted] = useState(false);

   const containsUppercase = (password) => {
      for (let i = 0; i < password.length; i++) {
          if (password[i] >= "A" && password[i] <= "Z") {
              return true;
          }
      }
      return false;
  };

   const handleSubmit = (event) => {
      event.preventDefault();

      let errors = initialStateErrors; 

      let hasError = false; 
      if (inputs.name === "") {
          errors.name.required =true;
          hasError=true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (inputs.email === "") {
          errors.email.required =true;
          hasError=true;
      }else if (!emailRegex.test(inputs.email)) {
            errors.email.invalid = true;
            hasError = true;
      }


      if (inputs.password === "") {
          errors.password.required =true;
          hasError=true;
      }else if (inputs.password.length < 6){
         errors.password.small = true;
         hasError = true;
      }else if (!containsUppercase(inputs.password)){
         errors.password.no_capital = true;
         hasError = true;
      }

   
      if(inputs.password2 != inputs.password){
         errors.password2.no_match = true;
         hasError=true;
      }

      setErrors(errors); 

    if (!hasError) {
        console.log("Form submitted successfully", inputs);
        setSubmitted(true)
        return <Navigate to="./" />
    }


   }

   const [inputs, setInputs] = useState({
      name:"",
      email:"",
      password:"",
      password2:""
   })

   const handleInputs = (event) => {
      setInputs({...inputs,[event.target.name]:event.target.value})

   }

    return (
      <div>
        <section className="register-block">
            <div className="container">
               <div className="row ">
                  <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form" action="" >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Full Name</label>
          
                        <input type="text" className="form-control" onChange={handleInputs} name="name" id=""  />

                        { errors.name.required==true ?
                        (<span className="text-danger" >
                            Name is required.
                        </span>):null
                        }
                     </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
          
                        <input type="text"  className="form-control" onChange={handleInputs} name="email" id=""  />
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
                        <input  className="form-control" type="password" onChange={handleInputs} name="password" id="" />
                        { errors.password.required?
                            (<span className="text-danger" >
                                Password is required.
                            </span>):null
                            }
                        { errors.password.small?
                        (<span className="text-danger" >
                                Password is too small.
                        </span>):null
                             }
                        { errors.password.no_capital?
                        (<span className="text-danger" >
                                 Password is weak.
                        </span>):null
                        }
                     </div>

                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                        <input  className="form-control" type="password" onChange={handleInputs} name="password2" id="" />
                        { errors.password2.no_match?
                            (<span className="text-danger" >
                                Password does not match.
                            </span>):null
                            }
                     </div>


                     <div className="form-group">
          
                        <span className="text-danger" >
                        { errors.custom_error?
                            (<p>{errors.custom_error}</p>)
                            :null
                            }
                        </span>
                        
          
                        <input type="submit" className="btn btn-login float-center" disabled={submitted} value="Register" />
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       Already have an account? Please <Link to="/login">Login</Link>.
                     </div>         
          
                     </form>        
          
                  </div>
          
               </div>          
          
            </div>
          </section>
         </div>
    )
};