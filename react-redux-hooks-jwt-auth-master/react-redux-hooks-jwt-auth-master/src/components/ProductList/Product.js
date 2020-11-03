import React from 'react';
import { withRouter } from 'react-router-dom'
import { Col, Card, Row, Button } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
//import Panel from 'react-bootstrap/lib/Panel'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import fanpic from './fanpic1.jpg'
function Product(props) {
  let {
    product
  } = props;
 
  var templist=[];

  localStorage.setItem("checkList", JSON.stringify(templist));

  //var categoryName=localStorage.getItem("categoryName")

  const handleChange = (e) => {
    e.preventDefault();
      if(e.target.checked){
          //console.log(e.target.name)
    
    //console.log(JSON.parse(localStorage.getItem("checkList")))
    templist=JSON.parse(localStorage.getItem("checkList"))
    //console.log(templist)
    templist.push(e.target.name)
    //console.log(templist)
    //localStorage.removeItem("checkList")
    localStorage.setItem("checkList", JSON.stringify(templist));
      }
  };


  const handleSubmitClick = (e) => {
   
    e.preventDefault();
    props.history.push({
        pathname: '/compare',
        state: JSON.parse(localStorage.getItem("checkList"))
      });    
      window.location.reload();   
}

const productDetailsPage=(model)=>{
  localStorage.setItem("productDesc",JSON.stringify(model))
  props.history.push({
      pathname: '/productDetails',
      state: model
    });    
    window.location.reload();   
}

  return (

    <Col
      lg={3}
      md={4}
      sm={6}  style={{display: 'flex', flexDirection: 'row'}}>
          
      <Card style={{alignItems:"center"}} >
      <div style={{alignItems:"center"}} >
      <img onClick={()=>productDetailsPage(product)} style={{width:"150px"}} src={fanpic} alt="fanpic" />
      </div>

        <div style={{alignItems:"center"}} >
          <div onClick={()=>productDetailsPage(product)} style={{color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"600"}}>
          {product.manufacturer}
          </div>
        </div>

        <div style={{alignItems:"center"}} >
          <div onClick={()=>productDetailsPage(product)} style={{color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"600"}}>
          {product.series}
          </div>
        </div>

        <div style={{alignItems:"center"}} >
          <div onClick={()=>productDetailsPage(product)} style={{color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"600"}}>
          {product.model}
          </div>
        </div>
            <br></br>
          
          

       
        <span style={{alignSelf:"center", fontSize:"16px"}}>{product.airflow} CFM</span>
        
        <span style={{alignSelf:"center", fontSize:"16px"}}>{product.power_max} W at max speed</span>
        <span style={{alignSelf:"center", fontSize:"16px"}}>{product.sound} dBA at max speed</span>
        <span style={{alignSelf:"center", fontSize:"16px"}}>{product.fan_diameter}" fan sweep diameter</span>
        <br></br>
        <span style={{alignSelf:"center",color: "rgb(211, 13, 13)"}}>
              Past specifications:
        </span>
        <span style={{alignSelf:"center",color: "rgb(211, 13, 13)"}}>
              {product.past_specs}
        </span>



        <div>
            <Row>
            <FormControlLabel control={<Checkbox color="default" onChange={handleChange} name={product.model} onKeyPress={handleSubmitClick}/>} label="Compare" />
            <FormControlLabel control={<Button className="btn btn-primary btn-block" style={{backgroundColor:"rgb(66, 99, 136)", width:"95px", fontSize:"14px", fontFamily:"Arial", borderColor:"grey", borderWidth:"1px"}} type="submit" >Add to</Button>} />
            </Row>
        </div>
      </Card>
    </Col>
    
    
  );
}



export default withRouter(Product);