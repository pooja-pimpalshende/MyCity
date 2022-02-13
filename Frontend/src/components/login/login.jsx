import React from 'react'
import './login.css'

function LoginComponent() {
    return (
      <div>
        <h2>Log-in</h2>
        <form action="" id='loginform'>
            <label htmlFor="">Enter user name : </label>
            <input type="text" /><br /><br />
            <label htmlFor="">Enter Password : </label>
            <input type="text" />
        </form>
        <br />
        <button id='loginbtn'>Submit</button>
      </div>
    );
  }

  export default LoginComponent