import React from "react";
import { Table} from 'react-bootstrap';
import UserService from "../services/user.service";

class BoardUser extends React.Component {

  constructor(props) {
      super(props);
     //console.log(this.props.location.state);
      this.state = {
        error: null,
        posts: [],
        post:{},
        response: {},
      }
    }
  
    componentDidMount() {
      
     this.getPost();
     //this.getSearchProduct();
    }
  
    
   
  
    getPost(){
  
      //axios.get(API_BASE_URL+'getAllProducts').then(
        UserService.getUserBoard().then(
        (result) => {
            console.log(result.data)
          this.setState({
            posts: result.data
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
    }
  
  
  
    render() {
      const {posts} = this.state;
        return(
          <Table>
          <tbody>
          
            {posts.map(post => (
                <tr key={post.product_id}>
                <td>{post.product_id}</td>
                <td>{post.product_name}</td>
                <td>{post.details}</td>
                <td>{post.document}</td>
                <td>{post.contact}</td>
                </tr>
            ))}
            
          </tbody>
        </Table>
        )
    }
  }
  
  export default BoardUser;


