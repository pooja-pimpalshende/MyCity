import React from 'react';
import './signup.css'

function SignUpComponent(){
    return(
        <div class="form">
		<form>
			Name : <input text="text" placeholder="username"/>
                Password : <input text="text" placeholder="password"/>
                Email : <input text="email" placeholder="email"/>
                Mobile : <input text="number" placeholder="mobile"/>
                <button>Sign Up</button>

            </form>
            
        </div>
    )

}

export default SignUpComponent