
export default function validateInfo(values){
    let errors={}

    //businessname 
    if(!values.businessname.trim()){
        errors.businessname = "Businessname required"
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

    //orgname 
    if(!values.orgname.trim()){
        errors.orgname = "Hostel name required"
    }

    //plotno 
    if(!values.plotno.trim()){
        errors.plotno = "Plon no./House No. required"
    }

    //street 
    if(!values.street.trim()){
        errors.street = "Street name required"
    }

    //city 
    if(!values.city.trim()){
        errors.city = "City name required"
    }

    //distt 
    if(!values.distt.trim()){
        errors.distt = "District name required"
    }

    //state 
    if(!values.state.trim()){
        errors.state = "State name required"
    }

    //Pin Number
    if(!values.pin){
        errors.pin = "Pincode is required"
    }else if(values.pin.length < 6){
        errors.pin = "Pincode is less than 6 characters"
    }else if(values.pin.length > 6){
        errors.pin = "Pincode is greater than 6 characters"
    }

    return errors;
}