export default function validateInfo(values){
    let errors={}

    //username 
    if(!values.username.trim()){
        errors.username = "Username required"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Phone Number
    if(!values.phone){
        errors.phone = "Phone Number is required"
    }else if(values.phone.length < 10){
        errors.phone = "Phone Number is less than 10 characters"
    }else if(values.phone.length > 10){
        errors.phone = "Phone Number is greater than 10 characters"
    }

    //password
    if(!values.password1){
        errors.password1 = 'Password is required'
    }else if(values.password1.length < 6){
        errors.password1 = 'Password needs to 6 characters or more';
    }

    //confirm password
    if(!values.password2){
        errors.password2 = 'Password is required'
    }else if(values.password2 !== values.password1){
        errors.password2 = 'Password do not match'
    }

    return errors;
}