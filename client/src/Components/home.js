import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as api from "../api/index.js"
import * as yup from "yup";
import "./css/style.css"

// TODO: hide login form if hes signed in n show someting else. like a let's begin button that will take to form ig
const signUpSchema = yup.object().shape({
    userName:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
    uType:yup.string().required()
})

function Home() {

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
    };
  
    const signin = (formData, navigate) => {
      api.signIn(formData)
        .then((res) => {
          const response = res.data;
          // console.log(response)
          alert("Logged in successfully!")
          localStorage.setItem("profile", JSON.stringify({ response }));
          if(response.result.utype === "user") navigate("/uskilldata");
          else navigate("/mentordata");
        })
        .catch(error => {
        console.log(error)
        alert(error.response.data.message);
        });
    };
  
    const signup = (formData, navigate) => {
      api.signUp(formData)
        .then((res) => {
          const response = res.data;
          alert("Account created successfully!")
          localStorage.setItem("profile", JSON.stringify({ response }));
          if(formData.uType === "user") navigate("/uskilldata");
          else navigate("/mentordata");
        })
        .catch(error => {
          console.log(error)
          alert(error.response.data.message);
        });
    };    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (isSignup) {        
        const isValid = await signUpSchema.isValid(formData);
        // console.log(formData);
        // console.log(isValid);
        if (isValid) {
          signup(formData, navigate);
        } 
        else{
          alert("Please fill appropriate details");
        }
      } else {
        signin(formData, navigate);
      }
    };
      
    return (
    <>
    <div className="row login-main-container">
        <div className="col-lg-6 login-left-container login-container flex-container">
            <div className="home-quote login-inner-welcome">
            <div className="magic-box"></div>
                <h1 className="login-welcome-h1">If Oppurtunity</h1>
                <h1 className="login-welcome-h1">does not knock,</h1>
                <h1 className="login-welcome-h1">build a door <strong style={{color: "#2192FF", padding: 2 + "rem"}} >;</strong></h1>
            </div>
        </div>
        <div className="col-lg-6 login-right-container login-container flex-container">
        <div className="login-inner login-inner-form flex-container">
            <h1 className="login-signin-h1">{isSignup ? "SIGN UP" : "SIGN IN"}</h1>
            <form className="login-form">
                <div className="input-group mb-3">
                    {isSignup && <input onChange={handleChange} type="text" name="userName" className="form-control login-grp" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required/>}
                </div>
                <div className="mb-3 login-inputs">
                  <input onChange={handleChange} type="email" name="email" className="form-control login-grp" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 login-input">
                  <input onChange={handleChange} type="password" name="password" className="form-control login-grp" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                {isSignup && (
                <div>
                <h5 style={{marginRight: 2 + 'em'}}>Who are you?</h5>
                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" type="radio" name="uType" id="userType" value="user"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2" style={{fontSize: 1.5 + 'em'}}>
                      User
                    </label>
                  </div>
                <div className="form-check">
                    <input onChange={handleChange} className="form-check-input" type="radio" name="uType" id="mentorType" value="mentor"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1" style={{fontSize: 1.5 + 'em'}}>
                      Mentor
                    </label>
                  </div>
                  </div>
                  )}
                <button type="submit" onClick={handleSubmit} className="btn btn-primary login-btn">{isSignup ? "Sign Up" : "Sign In"}</button>
              </form>
            </div>
            <h6 className="haveaccount">
            {isSignup
            ? "Already Have an Account? "
            : "Don't Have an Account? "}
          <span
            onClick={switchMode}
            className="text-primary cursor-mode"
          >
            {isSignup ? "SIGN IN" : "SIGN UP"}
          </span>
            </h6>
        </div>
    </div>
    </>
    );
}

export default Home;