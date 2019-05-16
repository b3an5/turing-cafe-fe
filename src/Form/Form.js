import React, { Component } from 'react'

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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name='name' placeholder='name'></input>
        <input onChange={this.handleChange} name='date' placeholder='date'></input>
        <input onChange={this.handleChange} name='time' placeholder='time'></input>
        <input onChange={this.handleChange} name='guests' placeholder='number of guest' type='number'></input>
        <button>Make Reservation</button>
      </form>
    )
  }
}