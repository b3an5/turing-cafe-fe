import React, { Component } from 'react';
import './App.css';
import ResContainer from './ResContainer/ResContainer'
import Form from './Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      resArr: []
    }
  }

  componentDidMount() {
    this.fetchReservation()
  }

  fetchReservation = async () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    const response = await fetch(url)
    const result = await response.json()
    this.setState({resArr: result})
  }

  createCard = async ({name, date, time, guests}) => {
     await fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        name,
        date, 
        time,
        number: guests
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    this.fetchReservation()
  }

  deleteCardBE = async (res, ide) => {
    fetch(`http://localhost:3001/api/v1/reservations/${ide}`, {
      method: 'DELETE'
    })

  }

  deleteRes = (ide) => {
    const updatedArr = this.state.resArr.filter((res) => res.id !== ide)
    this.setState({resArr: updatedArr})
    this.deleteCardBE(updatedArr, ide)
  }

  render() {
    if(this.state.resArr.length > 0) {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
            <Form createCard={this.createCard}/>
          </div>
          <div className='resy-container'>
            <ResContainer deleteRes={this.deleteRes} resArr={this.state.resArr}/>
          </div>
        </div>
      )
    } else {
      return(<div>...loading</div>)
    }
  }
}

export default App;
