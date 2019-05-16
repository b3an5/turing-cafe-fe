import React, { Component } from 'react'
import './ResCard.css'

export default class ResCard extends Component {

  render() {
    const {id, name, date, time, number} = this.props.res
    return(
      <div className='card'>
        <h1 onClick={() => {this.props.deleteRes(id)}}>X</h1>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h3>number on the reservation:{number}</h3>
      </div>
    )
  }
}