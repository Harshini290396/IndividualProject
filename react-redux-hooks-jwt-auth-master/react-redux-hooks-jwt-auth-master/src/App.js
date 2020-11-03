import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import Avatar from 'react-avatar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";

import CategorySearch from './components/CategorySearch/CategorySearch'

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import ProductList from "./components/ProductList/ProductList";
import Compare from "./components/Compare/Compare";
import Product from "./components/ProductList/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const [state , setState] = useState({
    categoryName : "",
})

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
      //console.log(history);
      //console.log(history.location.pathname);
    });
    
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
     // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
     // setShowAdminBoard(currentUser.roles.includes("ROLE_USER"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

 
const handleChange = (e) => {
  const {id , value} = e.target  
   
  setState(prevState => ({
      ...prevState,
      [id] : value
  }))
}

const handleSubmitClick = (e) => {
if(e.key==='Enter'){
e.preventDefault();
history.push({
    pathname: '/productList',
    state: state.categoryName
  }); 
  window.location.reload();     
}
}

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand">
          {(history.location.pathname==="/productList" || history.location.pathname==="/compare" || history.location.pathname==="/productDetails") &&(
            
          <div className="navbar-nav">

          <li className="nav-item" style={{ alignSelf:"center", paddingRight: "420px", position:"relative"}}>
          <span style={{color:"rgb(31, 74, 124)", fontSize:"50px",fontWeight: "bold", fontFamily:"Times New Roman", alignContent:"center", position: "relative",left:"90px"}}>j<i className="iii">o</i><i className="iii">o</i>le</span>
          </li>


          <li className="nav-item" style={{alignSelf:"center", position:"relative"}}>
            <div class="fontuser">
                <input type="text" 
                       id="categoryName" 
                       value={state.categoryName}
                       onChange={handleChange}
                       onKeyPress={handleSubmitClick}
                       style={{ width:"400px",height:"20px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                />
                <i class="fa fa-search fa-sm"></i> 
            </div>
          </li>
        </div>
        )}

        
         

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link" style={{color:"rgb(70, 71, 71)", fontSize:"15px",fontWeight: "bold"}}>
                  Projects
                </Link>
              </li>
              <li className="nav-item gap">
              <Avatar color={'grey'} size="45" name={currentUser.username} round={true}/>
              </li>
              <li className="nav-item gap">
                <a href="/login" className="nav-link" style={{color:"rgb(70, 71, 71)", fontSize:"15px",fontWeight: "bold"}} onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/register"} className="nav-link" style={{color:"rgb(70, 71, 71)", fontSize:"15px",fontWeight: "bold"}}>
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/categorySearch" component={CategorySearch} />
            <Route path="/productList" component={ProductList}/>
            <Route path="/product" component={Product}/>
            <Route path="/compare" component={Compare}/>
            <Route path="/productDetails" component={ProductDetails}/>

          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

/*

 <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>


            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {(() => {
        switch (history.location.pathname) {
          case "/productList":   return "Search";
          case "green": return "#00FF00";
          case "blue":  return "#0000FF";
          default:      return "";
        }
        })()}
          */
