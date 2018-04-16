import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-2">
            <div className="card text-left">
              <img className="card-img-top" src={this.props.image} alt={this.props.product_name}   />
              <div className="card-body">
                <b className=" float-left">
                {this.props.product_name}
                 </b>
                <i className=" float-right">
                {this.props.product_price}
                 </i>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Product;