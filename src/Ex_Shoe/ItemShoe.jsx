import React, { Component } from 'react'

export default class ItemShoe extends Component {
  render() {
    return (
      <div className='col-4'>
        <img className='w-100' src={this.props.data.image} alt="" />
        <h4>{this.props.data.name}</h4>
        <button onClick = {()=>{
            this.props.handleAdd(this.props.data)
        }} className='btn btn-danger'>Buy</button>
      </div>
    )
  }
}
