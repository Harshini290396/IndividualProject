import React from 'react';
//import {useState} from 'react';
//import { Dropdown } from 'semantic-ui-react'
//import { Table} from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {API_BASE_URL} from '../../constants/apiConstants';

//import Input from "react-validation/build/input";
//import ReactSearchBox from 'react-search-box'

class CategorySearch extends React.Component {

    constructor(props) {
        super(props);
       //console.log(this.props.location.state);
        this.state = {
            categoryName : "",
            //categoryList: [],
            successMessage: null,
            //dropDownValueArray: []
        }
       // this.getCategoryList();
      }
    
    componentDidMount() {
       this.getCategoryList();
    }
    refreshPage() {
        window.location.reload(false);
      }
    
  
    getCategoryList(){
        axios.get(API_BASE_URL+'getCategoryList').then(
          (result) => {
            //const list = []
            //result.data.map(cat => list.push({key: cat.id, value: cat.category_name, text: cat.category_name }))
            this.setState({
              //categoryList: list
              categoryList: result.data
            });
          },
          (error) => {
            this.setState({ error });
          }
        );
    }

    handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

  handleSubmitClick = (e) => {
   if(e.key==='Enter'){
    e.preventDefault();
    this.props.history.push({
        pathname: '/productList',
        state: this.state.categoryName
      });   
      window.location.reload();   
    } 
}
    

    render() {
        //const {categoryList} = this.state;
          return(
         


            <div className="col-md-12">
        <div className="card card-container" style={{alignContent:"right"}}>

        <span style={{color:"rgb(31, 74, 124)", fontSize:"110px",fontWeight: "bold", fontFamily:"Times New Roman", alignContent:"center", position: "relative",left:"90px"}}>j<i className="ii">o</i><i className="ii">o</i>le</span>
      
        <div style={{color:"rgb(96, 97, 97)", fontSize:"20px",fontWeight: "bold", fontFamily:"arial", alignContent:"center", position: "relative",left:"25px"}}>Building Product Selection Platform</div>
        
        <br></br>
            <div class="fontuser">
                <input type="text" 
                       id="categoryName" 
                       value={this.state.categoryName}
                       onChange={this.handleChange}
                       onKeyPress={this.handleSubmitClick}
                       style={{ width:"400px",height:"20px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                />
                <i class="fa fa-search fa-sm"></i> 
            </div>
               
        </div>
        </div>
            
       
          )
      }
    }
    
    export default withRouter(CategorySearch);




    /*
     <div className="col-md-12">
        <div className="card card-container" style={{alignContent:"right"}}>
        <div style={{color:"rgb(96, 97, 97)", fontSize:"20px",fontWeight: "bold", fontFamily:"arial", alignContent:"center",position:"absolute",right:"90px"}}>Building Product Selection Platform</div>
        <br></br>
        <br></br>
        
                <input type="text" 
                       id="categoryName" 
                       value={this.state.categoryName}
                       onChange={this.handleChange}
                       onKeyPress={this.handleSubmitClick}
                /><i class="fa fa-user icon"> 
                </i>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={this.handleSubmitClick}
                >Submit</button>
 </div>
        </div>
                */
/*
function CategorySearch(props) {
   
    const [state , setState] = useState({
        categoryName : "",
        categoryList: [],
        successMessage: null
    })

    
    getCategoryList(){
       // console.log(this.state.categoryName)
        axios.get(API_BASE_URL+'getCategoryList').then(
          (result) => {
              console.log(result.data)
            this.setState({
              categoryList: result.data
            });
            console.log(this.state.categoryList[1].category_name)
          },
          (error) => {
            this.setState({ error });
          }
        );
    }

    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        props.history.push({
            pathname: '/productList',
            state: state.categoryName
          });      
    }
   
    return(
        <div className="col-md-12">
        <div className="card card-container" style={{alignContent:"right"}}>
        <div style={{color:"rgb(96, 97, 97)", fontSize:"20px",fontWeight: "bold", fontFamily:"arial", alignContent:"center",position:"absolute",right:"90px"}}>Building Product Selection Platform</div>
        <br></br>
        <br></br>

            <form>
                <div className="form-group text-left">
                <input type="text" 
                       className="form-control" 
                       id="categoryName" 
                       value={state.categoryName}
                       onChange={handleChange}
                />
               </div>
               
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            
        </div>
        </div>
    )
}

export default withRouter(CategorySearch);
*/

/*

 <form>
                <div className="form-group text-left">
                <input type="text" 
                       className="form-control" 
                       id="categoryName" 
                       value={state.categoryName}
                       onChange={handleChange}
                />
               </div>
               
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            */