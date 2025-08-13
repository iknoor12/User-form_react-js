import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("User data saved in localStorage!");

    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: <input type="text" id='nameInput' placeholder='Enter your name..' name='Username' value={name}
          onChange={e => setName(e.target.value)} /></label>

        <label htmlFor='email'>E-mail: <input type="email" id='emailInput' placeholder='Write email..' name='Email' value={email} 
          onChange={e => setEmail(e.target.value)}/></label>

        <div className='submitDiv'> <button type='submit'>Submit</button> </div>
      </form>
      
    </>
  )
}

export default App
