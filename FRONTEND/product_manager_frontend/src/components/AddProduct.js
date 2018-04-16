import React, { Component } from 'react';
import axios from 'axios' ;

const addProductAction = (product_name,product_price,image) =>   
   (axios.post('/add',{product_name,product_price,image})
   .then((resp)=>resp.data)) 
 
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            image:''
        }
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    handleClick = () => {
        console.log(JSON.stringify(this.state));
        var {product_name,product_price,image} = this.state;        
        addProductAction(product_name,product_price,image).then((response)=>{
          console.log(response);
        })
    }
    render() {
        return (
            <div className="container">
           
          </div>
          
        );
    }
}

export default AddProduct;