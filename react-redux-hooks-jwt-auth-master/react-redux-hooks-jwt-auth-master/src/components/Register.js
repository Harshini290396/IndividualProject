import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
    props.history.push({
      pathname: '/login'
    });  
  };

  

  return (
    <div className="col-md-12">
      <div className="card card-container" style={{alignContent:"right"}}>

      <span style={{color:"rgb(31, 74, 124)", fontSize:"110px",fontWeight: "bold", fontFamily:"Times New Roman", alignContent:"center", position: "relative",left:"90px"}}>j<i className="ii">o</i><i className="ii">o</i>le</span>
     <div style={{color:"rgb(96, 97, 97)", fontSize:"20px",fontWeight: "bold", fontFamily:"arial", alignContent:"center", position: "relative",left:"25px"}}>Building Product Selection Platform</div>
        
        <br></br>

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
              <div class="iconlogin"> 
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                  required
                  style={{ width:"400px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                />
                <i class="fa fa-user fa-lg"></i> 
            </div>
              </div>

              <div className="form-group">
              <div class="iconlogin"> 
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChangeEmail}
                  required
                  validations={[required, validEmail]}
                  style={{ width:"400px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                />
                <i class="fa fa-envelope fa-sm"></i> 
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
                  validations={[required, vpassword]}
                  required
                  style={{ width:"400px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                />
                <i class="fa fa-lock fa-lg"></i> 
            </div>
              </div>

              <div className="form-group" style={{position:"absolute",right:"60px"}}>
                <button className="btn btn-primary btn-block" style={{backgroundColor:"rgb(66, 99, 136)", width:"95px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"1px"}}>Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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

export default Register;
