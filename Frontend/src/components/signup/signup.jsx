import React from 'react';
import './signup.css'

function SignUpComponent(){
    return(
        <div>
            <form>
                Name : <input text="text" class="input-box" name="username"></input>
                Password : <input text="text" class="input-box" name="password"></input>
                Email : <input text="email" class="input-box" name="email"></input>
                Mobile : <input text="number" class="input-box" name="phone"></input>
                <button type="button" class="btn">Sign Up</button>

            </form>
            
        </div>
    )

}

export default SignUpComponent