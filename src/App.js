import React from 'react'
import './App.css'
import Form from './components/Form';
import FlightList from './components/FlightList';

function App() {
  return (
    <div className='App'>
      <Form></Form>
      <FlightList></FlightList>
    </div>
  )
}

export default App