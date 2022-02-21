export default function validateInfo(values){
    let errors={}

    //username 
    if(!values.username.trim()){
        errors.username = "Username required"
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