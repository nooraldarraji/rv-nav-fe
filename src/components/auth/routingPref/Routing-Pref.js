import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { register, login, clearError } from "../../../store/actions";
import { withRouter } from "react-router-dom";
// import "../register/Register.css"
import "../routingPref/Routing-Pref.css"
import styled from 'styled-components';

const Header = styled.div`
  height: 80px;
  width: auto
  background: #2A2E43;
`
const Text = styled.span`
  position: absolute;
  left: 0.74%;
  // right: 90.31%;
  top: 1.25%;
  bottom: 12.5%;
  color: rgba(53, 195, 226, 0.95);
  font-size: 36px;
  font-weight: bold;
  font-family: Heebo;
  height: 60px;
`


const RoutingPref = () => {
    const [routing,setRouting] = useState({});

    useEffect(() =>{
        
    },[])

    const handleChange = e =>{
        setRouting({...routing, [e.target.name]: e.target.value})
    }
    return(
        <div className="register-wrapper">
        <Header className="rv-way-header">
          <Text className="rv-way-header-text">RV WAY</Text>
        </Header>
        <div className="register-main">
        {/* {newUser.loading === true ?
            (
            <p className="register-auth-loading">Loading...</p>
          ) : ( */}
              <form className="register-main-form">
                <div className="register-header">
                  <h2 className="register-welcome-home">Tell us about your routing preferences!</h2>
                </div>
                <div className="avoid">
                  <span>I want to avoid</span>
                </div>
                {/* <div className="register-social-media">
                    
                {newUser.isSignedIn ?
                            (
                              <div>
                                {newUser.isSignedIn ? (
                          

                          <>
                            <h6>Welcome  {firebase.auth().currentUser.displayName}</h6>
                            <button onClick={() => firebase.auth().signOut()}>Logout</button>
                          </>
                          
                        ) : localStorage.getItem('firebaseui::rememberedAccounts') ? localStorage.removeItem('firebaseui::rememberedAccounts') : null}
                      </div>
                    ) :
                    //was uiConfig={this.uiConfig}
                    (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />)}
                </div> */}

                <div className="register-input-and-button">

                 <div>
                   
                  <input
                    name="DirtRoads"
                    id="DirtRoads"
                    type="checkbox"
                  ></input> 
                  <label for="DirtRoads" className="register-main-form-label">Dirt Roads longer than 2 miles</label>
                   </div>   
                  
                  
                  <div>
                   <input
                    id="DirtRoads"
                    name="SteepGrade"
                    id="Steep"
                    type="checkbox"
                  ></input>
                  <label for="Steep" className="register-main-form-label">Grades steeper than 10%</label>
                   </div> 
                  

                    <div>
                   <input
                    
                    name="Potholes"
                    id="Potholes"
                    type="checkbox"
                  ></input>
                    <label for="Potholes" className="register-main-form-label">Potholes</label>
                   </div> 
                  
                  
                  {/* {errors.email.length > 0 && (
            
                    <p className="register-main-form-error">{errors.email}</p>
                  )}
                  
                  {props.error === "Email already taken" &&
                  
                  (
                    <p className="register-main-form-error">Email already taken</p>
                  )} */}
                
                {/* <span className="password-mask" onClick={handleChange}>MASK</span>
                  <label className="register-main-form-label" id="password">Password</label>
                  <input
                    className="register-main-form-input"
                    id="password-input"
                    type="password"
                    name="password"
                    value={newUser.password}
                    
                    onChange={handleChange}
                    noValidate
                  ></input>
                  {errors.password.length > 0 && (
                    <p className="register-main-form-error">{errors.password}</p>
                  )}
                  <div>
                    <span className="password-mask-confirm" onClick={handleChange}>MASK</span>
                    <label className="register-main-form-label" id="confirm-password">Confirm Password</label>
                    <input
                      className="register-main-form-input"
                      id="confirm-password-input"
                      type="password"
                      name="confirmPassword"
                      value={newUser.confirmPassword}
                      onChange={handleChange}
                    // noValidate
                    ></input> */}
                    {/* {errors.confirmPassword.length > 0 && (
                      <p id="confirm-password-error" className="register-main-form-error">{errors.confirmPassword}</p>
                    )} */}
                  {/* </div> */}
                  <button
                    className="register-lets-go-button"
                    variant="warning"
                    // onClick={registerSubmit}
                    type="submit"
                  >
                    Add to My Preferences
                    </button>
                  
                  <div className="already-have-an-account">
                    <span>Skip this step</span>
                  </div>
                </div>
                
              </form>
        </div>
      </div>
    );
  }
    




export default RoutingPref