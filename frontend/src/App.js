import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { useState } from 'react'


function App() {
  const handleLogin = (e) => {
    e.preventDefault()
    let name = document.getElementById('userName').value
    let password = e.target.form[1].value

    let data = { 'username': name, 'password': password }
    getData(data)
  }

  const handleCreateClick = (e) => {
    e.preventDefault()
    let name = document.getElementById('userName').value
    let password = e.target.form[1].value
    let data = { 'username': name, 'password': password }
    postData(data)
  }

  const loginElement = (
    <form>
      <h2>Login</h2>

      <div>
        <label>Username: <input className='inputField' id='userName' /></label>
      </div>

      <div>
        <label>Password: <input className='inputField' id='password' /></label>
      </div>

      <div>
        <button onClick={handleLogin}> Login </button>
      </div>
    </form>
  )

  const createElement = (
    <form>
      <h2>Create a new account...</h2>

      <div>
        <label>Username: <input className='inputField' id='userName' /></label>
      </div>

      <div>
        <label>Password: <input className='inputField' id='password' /></label>
      </div>

      <div>
        <button onClick={handleCreateClick}> Create </button>
      </div>
    </form>
  )

  const [flex, setFlex] = useState(loginElement)



  const getData = (data) => {
    return fetch(`http://localhost:3001/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        setFlex(<p>Welcome {data.username}</p>)
      } else {
        setFlex(createElement)
        // make new user prompt
        //flexElement = createElement
      }

    })
  }

  const postData = (data) => {
    return fetch(`http://localhost:3001/newrecord`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        setFlex(<p>Welcome {data.username}</p>)
      } else {
        setFlex(createElement)
        alert('Account already exists.')
        // make new user prompt
        //flexElement = createElement
      }

    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {flex}
      </header>
    </div>
  );
}

export default App;
