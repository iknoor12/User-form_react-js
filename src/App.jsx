import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>User Registration Form</h1>

      <form>
        <label for='name'>Name: <input type="text" id='nameInput' placeholder='Enter your name..' name='Username' /></label>

        <label for='email'>E-mail: <input type="email" id='emailInput' placeholder='Write email..' name='Email' /></label>

        <div className='submitDiv'><button>Submit</button></div>
      </form>
      
    </>
  )
}

export default App
