import React,{useState} from 'react';
import PropTypes from 'prop-types';
//import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Row, Table } from 'react-bootstrap';
import fanpic from '../ProductList/fanpic1.jpg'

import { Link } from "react-router-dom";
//import ProductList from '../ProductList/ProductList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function ProductDetails() {
  //const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state ] = useState({
   product:JSON.parse(localStorage.getItem("productDesc")),
   categoryName:localStorage.getItem("categoryName")
})
  

  console.log(state.product.airflow)
 // const  products={};

 /* const getProductDetails=()=>{
    const categoryName= localStorage.getItem("categoryName")
    console.log(this.state.categoryName)
    axios.get(API_BASE_URL+'productDescription?model='+this.state.model).then(
      (result) => {
          console.log(result.data)
          
        
          state.products: result.data[0]
        
      },
      (error) => {
        this.setState({ error });
      }
    );
}*/

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  //const handleChangeIndex = (index) => {
   // setValue(index);
  //};

  return (
    <div className="productdetail productdetail-container">
        <div style={{position:"absolute",paddingRight:"850px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"15px",fontWeight:"700"}}>Mechanical {'>'} {state.categoryName} {'>'} {state.product.model}</div><br></br><hr></hr>
      <Row>
        
      <img style={{width:"60px",paddingLeft:"25px"}} src={fanpic} alt="fanpic" />
      <div style={{position:"absolute",paddingLeft:"75px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"700"}}>{state.product.manufacturer} {'/'} {state.product.series} {'/'} {state.product.model}</div>
      <span style={{position:"absolute",paddingLeft:"530px",color: "rgb(211, 13, 13)",alignSelf:"center", fontSize:"15px",fontWeight:"500"}}>
              Past specifications: {state.product.past_specs}
        </span>
        <span style={{position:"absolute",paddingLeft:"1000px",color: "rgb(211, 13, 13)",alignSelf:"center", fontSize:"15px",fontWeight:"500"}}>
        <Button className="btn btn-primary btn-block" style={{backgroundColor:"rgb(66, 99, 136)", width:"95px", fontSize:"14px", fontFamily:"Arial", borderColor:"grey", borderWidth:"1px"}} type="submit" >Add to</Button>
        </span>
      </Row><br></br>
         
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Product Summary" {...a11yProps(0)} />
          <Tab label="Product Details" {...a11yProps(1)} />
          <Tab label="Product Documentation" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
     
        <TabPanel value={value} index={0}>
        <div style={{position:"absolute",paddingLeft:"10px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"700"}}>Product Summary</div><br></br><br></br>
        <Table style={{position:"relative"}}>
            <tbody>
              <td style={{border:"none"}}>
                <tr>DESCRIPTION</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Manufacturer</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Series</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Model</tr>
                <tr>TYPE</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Use Type</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Application</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Mounting Location</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Accessories</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Model Year</tr><br></br>
                
              </td>
            
            <td key={state.product.product_id} >
              <br></br>
            <tr>{state.product.manufacturer}</tr>
            <tr>{state.product.series}</tr>
            <tr>{state.product.model}</tr>
            <br></br>
            <tr>{state.product.use_type}</tr>
            <tr>{state.product.application}</tr>
            <tr>{state.product.mounting_loc}</tr>
            <tr>{state.product.accessories}</tr>
            <tr>{state.product.model_year}</tr>
            <br></br><br></br>
            </td>
            
            <td style={{border:"none"}}>
            
            <tr>TECHNICAL SPECIFICATIONS</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Airflow (CFM)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Power (W)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Operating Voltage (VAC)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Fan Speed (RPM)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Number of fan speeds</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Sound at max speed (dBA)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Fan sweep diameter (in)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Height (in)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Weight (lbs)</tr><br></br>
            </td>
            <td>
                <br></br>
            <tr>{state.product.airflow}</tr>
            <tr>Min  {state.product.power_min}  Max  {state.product.power_max}</tr>
            <tr>Min  {state.product.voltage_min}  Max  {state.product.voltage_max}</tr>
            <tr>Min  {state.product.fanspeed_min}  Max  {state.product.fanspeed_max}</tr>
            <tr>{state.product.no_of_speed}</tr>
            <tr>{state.product.sound}</tr>
            <tr>{state.product.fan_diameter}</tr>
            <tr>Min  {state.product.height_min}  Max  {state.product.height_max}</tr>
            <tr>{state.product.weight}</tr>
            </td>
             
           </tbody>
            </Table>
        </TabPanel>

        <TabPanel value={value} index={1} >
        <div style={{position:"absolute",paddingLeft:"0px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"700"}}>Product Details</div><br></br><br></br>
        <p>SERIES INFORMATION</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Airfoils - Moso bamboo - {state.product.fan_diameter}" diameter</p>
        <p style={{fontSize:"14px"}}>Airfoil finishes - Caramel Bamboo or Cocoa Bamboo</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Hardware Finishes - Satin Nickel, Oil-Rubbed Bronze, Black or White</p>
        <p style={{fontSize:"14px"}}>Motor - EC motor with digital inverter drive</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Exceeds ENERGY STAR fan efficiency requirements by up to 1200%</p>
        <p style={{fontSize:"14px"}}>Controls - Remote control (included), {state.product.manufacturer} Home mobile app, {state.product.manufacturer} Wall Control (optional), or Amazon Alexa-enables devices (optional)</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Onboard Sensors - Ambient and surface temperature, relative humidity, and passive infrared sensors enabled SenseME technology. Technology lets you automate your fan's operation to maximize convenience and energy savings</p>
        <p style={{fontSize:"14px"}}>Environment - {state.product.application} use only</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Accessories - {state.product.manufacturer} Kit and {state.product.manufacturer} Wall Control. See respective spec sheets for details.</p>
        <p style={{fontSize:"14px"}}>Patented LED light module (optional) seamlessly integrates with the body of the fan</p>
        <p style={{backgroundColor:"rgb(231, 229, 229)",fontSize:"14px"}}>Made in the U.S.A</p>
        </TabPanel>

        <TabPanel value={value} index={2}>
        <div style={{position:"absolute",paddingLeft:"0px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"700"}}>Product Documentation</div><br></br><br></br>
        <Table style={{position:"relative"}}>
            <tbody>
        <td style={{border:"none"}}>
        <tr><i class="fa fa-file-word-o fa-lg gap1"></i> <Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>CSI-Three Part Specification (DOC)</Link><br></br><br></br></tr>
        <tr><i class="fa fa-file-pdf-o fa-lg gap1"></i> <Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>Submittal (PDF) </Link> <br></br><br></br></tr>
        <tr><i class="fa fa-file-pdf-o fa-lg gap1"></i> <Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>Control Options (PDF)</Link> <br></br><br></br></tr>
        <tr><i class="fa fa-file-o fa-lg gap1"></i> <Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>Photometric Data (PDF)</Link> <br></br><br></br></tr>
        </td>
        <td style={{border:"none"}}>
        <tr><i class="fa fa-file-word-o fa-lg gap1"></i><Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>BIM (RVT)</Link><br></br><br></br></tr>
        <tr><i class="fa fa-file-pdf-o fa-lg gap1"></i><Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>Plan Views (DWG) </Link><br></br><br></br></tr>
        <tr><i class="fa fa-file-pdf-o fa-lg gap1"></i> <Link to="/Peoject JooleMVP-SOW.pdf" target="_blank" download style={{color:"black"}}>Elevation Views (DWG)</Link> <br></br><br></br></tr>

        </td>
        </tbody>
            </Table>
        </TabPanel>

        <TabPanel value={value} index={3}>
        <div style={{position:"absolute",paddingLeft:"10px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"18px",fontWeight:"700"}}>Contact</div><br></br><br></br>
        <Table style={{position:"relative"}}>
            <tbody>
        <td style={{border:"none"}}>
        <tr>SALES REPRESENTATIVE</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Name</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Phone</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Email</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Web</tr><br></br>
            </td>
            <td>
                <br></br>
            <tr>Marty McFly</tr>
            <tr>+1 650 889 6222</tr>
            <tr>marty@mcfly.com</tr>
            <tr>http://www.test.com</tr>
            </td>
            <td style={{border:"none"}}>
        <tr>MANUFACTURER</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Department</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Phone</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Email</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Web</tr><br></br>
            </td>
            <td>
                <br></br>
            <tr>Technical Support</tr>
            <tr>+1 800 466 8200</tr>
            <tr>techsupport@bigass.com</tr>
            <tr>http://www.bigassfans.com</tr>
            </td>
            </tbody>
            </Table>
        </TabPanel>
    </div>
  );
}


/*
import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {API_BASE_URL} from '../../constants/apiConstants';
import  {Container, Table}  from 'react-bootstrap';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class ProductDetails extends React.Component {

constructor(props) {
    super(props);
   //console.log(this.props.location.state);
    this.state = {
      model: this.props.location.state,
      categoryName: localStorage.getItem("categoryName"),
        products:{},
        value:0,
        //theme : useTheme()
    }
  }
 

componentDidMount() {
   this.getProductDetails();
}

a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }



getProductDetails(){
  
    console.log(this.state.categoryName)
    axios.get(API_BASE_URL+'productDescription?model='+this.state.model).then(
      (result) => {
          console.log(result.data)
          
        this.setState({
          products: result.data[0]
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
}

handleChange = (event, newValue) => {
    this.setState({
       value: newValue
      });
  };

  handleChangeIndex = (index) => {
    this.setState({
        value: index
       });
  };


render() {

  
    const {theme,products,a11yProps,value,handleChangeIndex,handleChange} =this.state

      return(
       
       
        
       
        <Container className="product product-container">
            <div style={{position:"absolute",paddingRight:"850px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"16px",fontWeight:"600"}}>Mechanical {'>'} {this.state.categoryName} {'>'} {this.state.model}</div><br></br>
           
            <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
       
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </SwipeableViews>
        
        </Container>
        
        
         
             
      

   
      )
  }
}

export default withRouter(ProductDetails);


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }*/