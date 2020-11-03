import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {API_BASE_URL} from '../../constants/apiConstants';
import {Table} from 'react-bootstrap'

class Compare extends React.Component {

constructor(props) {
    super(props);
   //console.log(this.props.location.state);
    this.state = {
      
      checkList: this.props.location.state,
        products:[],
        final:[],
        categoryName: localStorage.getItem("categoryName")
    }
    
  }

  componentDidMount() {
      //var prolist=[]
    console.log(this.state.checkList.length)
    //this.state.checkList.map(name => (
    //console.log(name)
   // this.getfinalList();
   this.getProducts();
   console.log(this.state.products);
    //console.log(proList);
    //));
 }

 getfinalList(){
     console.log('************')
    for(var i = 0; i < this.state.checkList.length; i++){
        this.getProducts(this.state.checkList[i])
        console.log(this.state.products)
        this.state.final.push(this.state.products)
        }
 }

 

 getProducts(){
   // var list={}
    for(var i = 0; i < this.state.checkList.length; i++){
        
        //console.log(name),
    axios.get(API_BASE_URL+'productCompare?model='+this.state.checkList[i]).then(
      (result) => {
       console.log(result.data[0])
        //list=result.data;
        //console.log(list);
        //result.data.map(cat => list.push({key: cat.id, value: cat.category_name, text: cat.category_name }))
       /* this.setState({
          products: result.data
          
        });*/
        this.state.products.push(result.data[0])
        localStorage.setItem("compare", JSON.stringify(this.state.products));
        console.log(this.state.products)
      },
      (error) => {
        this.setState({ error });
      }
    )

    //console.log(this.state.products);
    //return this.state.products;
    }
    console.log(this.state.products);
}

 render(){
    
    const {products,categoryName} = this.state;
    console.log(products)
    var templist=[]
    templist=JSON.parse(localStorage.getItem("compare"))
     return(
         <div className='compare'>
           <div style={{position:"absolute",paddingRight:"820px",color: "rgb(31, 74, 124)", fontSize:"16px",fontWeight:"600"}}>Mechanical {'>'} {categoryName} {'>'} Compare</div><br></br>
            
            <Table style={{position:"relative"}}>
            <tbody>

              <td style={{border:"none"}}>
                <br></br>
                <tr>DESCRIPTION</tr><br></br>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Manufacturer</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Series</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Model</tr><br></br>
                <tr>TYPE</tr><br></br>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Use Type</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Application</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Mounting Location</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Accessories</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Model Year</tr><br></br>
                <tr>TECHNICAL SPECIFICATIONS</tr><br></br>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Airflow (CFM)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Power (W)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Operating Voltage (VAC)</tr>
                <tr style={{backgroundColor:"rgb(231, 229, 229)"}}>Fan Speed (RPM)</tr><br></br>
              </td>
              
             {templist.map(post => (
            
            <td key={post.product_id} >
              <br></br><br></br><br></br>
            <tr>{post.manufacturer}</tr>
            <tr>{post.series}</tr>
            <tr>{post.model}</tr>
            <br></br><br></br><br></br>
            <tr>{post.use_type}</tr>
            <tr>{post.application}</tr>
            <tr>{post.mounting_loc}</tr>
            <tr>{post.accessories}</tr>
            <tr>{post.model_year}</tr>
            <br></br><br></br><br></br>
            <tr>{post.airflow}</tr>
            <tr>Min  {post.power_min}  Max  {post.power_max}</tr>
            <tr>Min  {post.voltage_min}  Max  {post.voltage_max}</tr>
            <tr>Min  {post.fanspeed_min}  Max  {post.fanspeed_max}</tr>
            </td>
             
          ))}
           </tbody>
            </Table>
         </div>
     )
 }

}

export default withRouter(Compare);