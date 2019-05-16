import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCard({...this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='form'>
        <input onChange={this.handleChange} name='name' placeholder='name' className='inputs'></input>
        <input onChange={this.handleChange} name='date' placeholder='date' className='inputs'></input>
        <input onChange={this.handleChange} name='time' placeholder='time' className='inputs'></input>
        <input onChange={this.handleChange} name='guests' placeholder='number of guest' type='number' className='inputs'></input>
        <button>Make Reservation</button>
      </form>
    )
  }
}