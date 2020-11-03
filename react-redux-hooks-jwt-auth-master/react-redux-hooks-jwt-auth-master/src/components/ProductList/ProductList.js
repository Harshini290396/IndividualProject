import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {API_BASE_URL} from '../../constants/apiConstants';
import SplitPane from 'react-split-pane';
//import SplitScreen from './SplitScreen';
import  {Button, Col, Container, Row}  from 'react-bootstrap';
import Product from './Product';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
//import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
//import Slider from 'react-rangeslider'

class ProductList extends React.Component {

constructor(props) {
    super(props);
   //console.log(this.props.location.state);
    this.state = {
      error: null,
      products: [],
      filter1:[],
      post:{},
      response: {},
      categoryName: this.props.location.state,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      modelfrom: null,
      modelto: null,
      slidervalue1: 0,
      slidervalue2: 0,
      slidervalue3: 0,
      slidervalue4: 0,
      slidervalue5: 0,
      slidervalue6: 0,
      slidervalue7: 0,
    }
    this.togglePanel1 = this.togglePanel1.bind(this);
    this.togglePanel2 = this.togglePanel2.bind(this);
    this.togglePanel3 = this.togglePanel3.bind(this);
    this.togglePanel4 = this.togglePanel4.bind(this);
    this.togglePanel5 = this.togglePanel5.bind(this);
  }

componentDidMount() {
   //this.getPost();
   this.getSearchProduct();
}



getPost(){
    //const API_BASE_URL = "http://localhost:8080/springmvc_user_reg_login_war_exploded2/";
    axios.get(API_BASE_URL+'getAllProducts').then(
      (result) => {
          console.log(result.data)
        this.setState({
          products: result.data
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
}

getSearchProduct(){
  
    console.log(this.state.categoryName)
    axios.get(API_BASE_URL+'searchCategory?categoryName='+this.state.categoryName).then(
      (result) => {
          console.log(result.data)
          localStorage.setItem("categoryName", this.state.categoryName);
        this.setState({
          products: result.data
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
}

togglePanel1(e){
  this.setState({open1: !this.state.open1})
  }

  togglePanel2(e){
    this.setState({open2: !this.state.open2})
  }
  togglePanel3(e){
  this.setState({open3: !this.state.open3})
  }

  togglePanel4(e){
    this.setState({open4: !this.state.open4})
    }
  togglePanel5(e){
  this.setState({open5: !this.state.open5})
  }

  handleChange = (e) => {
    const {id , value} = e.target   
    this.setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
  modelfromto = (e) => {
    if(e.key==='Enter'){
      console.log(this.state.modelfrom)
      console.log(this.state.modelto)
      console.log(this.state.products)
     // this.state.products.map(product=>(
      //  product.model_year
     // ));

    
      this.state.products.filter(prod => prod.model_year >= this.state.modelfrom && prod.model_year <= this.state.modelto).map(filteredProduct => (
        //console.log(filteredProduct.manufacturer),
        this.state.filter1.push(filteredProduct)
      ))
      console.log(this.state.filter1)
      this.setState({products: this.state.filter1})
      this.setState({filter1: null})
      //this.setState({modelfrom: e.target.value})
     //this.props.history.push({
        // pathname: '/productList',
         //state: this.state.categoryName
       //});   
      // window.location.reload();   
     } 
 }

 onSlideChange1=(e)=>
 {this.setState({slidervalue1:e.target.value})}
 onSlideChange2=(e)=>
 {this.setState({slidervalue2:e.target.value})}
 onSlideChange3=(e)=>
 {this.setState({slidervalue3:e.target.value})}
 onSlideChange4=(e)=>
 {this.setState({slidervalue4:e.target.value})}
 onSlideChange5=(e)=>
 {this.setState({slidervalue5:e.target.value})}
 onSlideChange6=(e)=>
 {this.setState({slidervalue6:e.target.value})}
 onSlideChange7=(e)=>
 {this.setState({slidervalue7:e.target.value})}


render() {
    const {products} = this.state;
    const styles = {
      background: '#000',
      width: '2px',
      cursor: 'col-resize',
      margin: '0 5px',
      height: '100%',
    };
      return(
       
        <SplitPane split="vertical"  minSize={300}
        defaultSize={300}
        resizerStyle={styles} panes={this.state.panes}
        onChange={this.onChange}>

        <div className="product product-container">
        <Row>
          <Col style={{paddingLeft:"40px"}}>Search:</Col>
          <Col style={{paddingRight:"10px"}}><Button className="btn btn-primary btn-block" style={{textAlign:"center",backgroundColor:"grey", width:"65px",height:"30px", fontSize:"14px", fontFamily:"Arial", borderColor:"grey", borderWidth:"1px"}}>Save</Button></Col>
          <Col style={{paddingRight:"40px"}}><Button className="btn btn-primary btn-block" style={{backgroundColor:"grey", width:"65px",height:"30px", fontSize:"14px", fontFamily:"Arial", borderColor:"grey", borderWidth:"1px"}}>Clear</Button></Col>
        </Row>
        <br></br>
        <Row>
          <Col style={{backgroundColor:"rgb(66, 99, 136)",color:"white"}}>Product</Col>
          <Col>Project</Col>
        </Row>
        <hr></hr>
        <div>
        <div onClick={(e)=>this.togglePanel1(e)} style={{backgroundColor:"rgb(231, 229, 229)"}}>
        Product Type</div>
        {this.state.open1 ? (
        <div className="content">
         <Row>
           <Col>Model year:</Col>
           <Col><input type="number" 
                       id="modelfrom"
                       onChange={this.handleChange}
                       style={{ width:"50px",height:"20px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                /> - <input type="number" 
                       id="modelto"
                       onChange={this.handleChange}
                       onKeyPress={this.modelfromto}
                       style={{ width:"50px",height:"20px", fontSize:"14px", fontFamily:"Times New Roman", borderColor:"grey", borderWidth:"2px"}}
                /></Col>
         </Row>
        </div>
        ) : null}
        </div> 
<hr></hr>
        <div>
        <div onClick={(e)=>this.togglePanel2(e)} style={{backgroundColor:"rgb(231, 229, 229)"}}>
        Technical Specifications</div>
        {this.state.open2 ? (
          
        <div className="content">
          <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Airflow (CFM)</div>
          <RangeSlider
      value={this.state.slidervalue1}
      onChange={this.onSlideChange1}
      min={3000}
      max={10000}
      variant='secondary'
    />
        <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Max Power (W)</div>
        <RangeSlider
      value={this.state.slidervalue2}
      onChange={this.onSlideChange2}
      min={9.84}
      max={100}
      variant='secondary'
    />
        <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Sound at max speed (dBA)</div>
        <RangeSlider
      value={this.state.slidervalue3}
      onChange={this.onSlideChange3}
      min={20}
      max={100}
      variant='secondary'
    />
        <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Fan sweep diameter (in)</div>
        <RangeSlider
      value={this.state.slidervalue4}
      onChange={this.onSlideChange4}
      min={18}
      max={100}
      variant='secondary'
    />
        <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Height (in)</div>
        <RangeSlider
      value={this.state.slidervalue5}
      onChange={this.onSlideChange5}
      min={12}
      max={78}
      variant='secondary'
    />
        </div>
        ) : null}
        </div>  
<hr></hr>
        <div>
        <div onClick={(e)=>this.togglePanel3(e)} style={{backgroundColor:"rgb(231, 229, 229)"}}>
        Brand</div>
        {this.state.open3 ? (
        <div className="content">
        
         
        </div>
        ) : null}
        </div> 
<hr></hr>
        <div>
        <div onClick={(e)=>this.togglePanel4(e)} style={{backgroundColor:"rgb(231, 229, 229)"}}>
        Past Selections</div>
        {this.state.open4 ? (
        <div className="content">
         <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Firm</div>
         <RangeSlider
      value={this.state.slidervalue6}
      onChange={this.onSlideChange6}
      min={0}
      max={10}
      variant='secondary'
    />
         <div><i class="fa fa-arrow-up fa-sm"></i><i class="fa fa-arrow-down fa-sm gap2"></i>Global</div>
         <RangeSlider
      value={this.state.slidervalue7}
      onChange={this.onSlideChange7}
      min={0}
      max={1492}
      variant='secondary'
    />
        </div>
        ) : null}
        </div> 
<hr></hr>
        <div>
        <div onClick={(e)=>this.togglePanel5(e)} style={{backgroundColor:"rgb(231, 229, 229)"}}>
        Certifications</div>
        {this.state.open5 ? (
        <div className="content">
         
        </div>
        ) : null}
        </div> 


        </div>
        
        <div>
        <Container className="product product-container" >
        <div style={{position:"absolute",paddingRight:"850px",color: "rgb(31, 74, 124)",alignSelf:"center", fontSize:"16px",fontWeight:"600"}}>Mechanical {'>'} {this.state.categoryName}</div><br></br>
        
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          products.map(product => (
            <Product
              key={product.product_id}
              product={product} />
          ))
        }
        </div>
        </Container>
      </div>
      </SplitPane>          
      

   
      )
  }
}

export default withRouter(ProductList);

/*

<td>{post.manufacturer}</td>
              <td>{post.series}</td>
              <td>{post.model}</td>



               state = { language: '' }

    handleLanguage = (langValue) => {
        this.setState({language: langValue});
    }

    render() {
         return (
                <div className="col-sm-9">
                    <SelectLanguage onSelectLanguage={this.handleLanguage} /> 
                </div>
        )
     }








      {products.map(product => (
            <Table>
            <tbody>
              <tr key={product.product_id}>
              <td>{product.product_id}</td>
              </tr>
              <tr>
              <td>{product.product_name}</td>
              </tr>
              <tr>
              <td>{product.details}</td>
              </tr>
              <tr>
              <td>{product.document}</td>
              </tr>
              <tr>
              <td>{product.contact}</td>
              </tr>
              </tbody>
      </Table>
          ))}
              */