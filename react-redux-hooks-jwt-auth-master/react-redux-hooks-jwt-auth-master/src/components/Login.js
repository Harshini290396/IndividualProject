import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/categorySearch");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/categorySearch" />;
  }

  return (
    
    <div className="col-md-12">
      <div className="card card-container" style={{alignContent:"center"}}>
      
       <span style={{color:"rgb(31, 74, 124)", fontSize:"110px",fontWeight: "bold", fontFamily:"Times New Roman", alignContent:"center", position: "relative",left:"90px"}}>j<i className="ii">o</i><i className="ii">o</i>le</span>
       <div style={{color:"rgb(96, 97, 97)", fontSize:"20px",fontWeight: "bold", fontFamily:"arial", alignContent:"center", position: "relative",left:"25px"}}>Building Product Selection Platform</div>
        
        <br></br>
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
          <div class="iconlogin"> 
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="Username or Email"
              onChange={onChangeUsername}
              required
              validations={[required]}
              style={{ width:"400px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
            />
            <i class="fa fa-user fa-lg"></i> 
            </div>
          </div>

          <div className="form-group">
          <div class="iconlogin"> 
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChangePassword}
              required
              validations={[required]}
              style={{ width:"400px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
            />
            <i class="fa fa-lock fa-lg"></i> 
            </div>
          </div>

          <div className="form-group" style={{position:"absolute",right:"60px"}}>
            <button className="btn btn-primary btn-block" style={{backgroundColor:"rgb(66, 99, 136)", width:"95px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"1px"}} disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
