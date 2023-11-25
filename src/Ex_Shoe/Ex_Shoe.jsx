import React, { Component } from 'react'
import { shoeArr } from './Data'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
  }

  handleAdd = (shoe) => {
    
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item)=>item.id==shoe.id)
    if(index==-1){
      let newShoe = {...shoe, soLuong: 1};
      cloneCart.push(newShoe)
    }else{
      cloneCart[index].soLuong++;
    }
    
    this.setState({cart: cloneCart});

  };

  handleDelete = (id) =>{
    let newCart = this.state.cart.filter((item)=>item.id != id)
    this.setState({cart: newCart})
  }
  render() {
    return (
      <div className='row'>
        <CartShoe handleDelete={this.handleDelete} cart = {this.state.cart}/>
        <ListShoe handleAdd = {this.handleAdd} list = {this.state.shoeArr}/>
      </div>
    )
  }
}
