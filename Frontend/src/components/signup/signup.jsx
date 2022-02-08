import React from 'react';
import './signup.css'

function SignUpComponent(){
    return(
        <div>
            <form>
                Name : <input text="text" name="username"></input>
                Password : <input text="text" name="password"></input>
                Email : <input text="email" name="email"></input>
                Mobile : <input text="number" name="phone"></input>
                <button>Sign Up</button>

            </form>
            
        </div>
    )

}

export default SignUpComponent