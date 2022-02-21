import { useState,useEffect } from 'react'

const useForm = validate =>{
    const [values,setValues] = useState({
        username : '',
        email : '',
        phone : '',
        password1 : '',
        password2 : ''
    })

    const [errors,setErrors] = useState({
       
    })

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        
        const errorMsg = validate(values)

        if(Object.keys(errorMsg).length !== 0){
           return setErrors(errorMsg)
        }
        const inputElements = document.querySelectorAll("input")
        if(inputElements){
            const arrayElement = Array.from(inputElements)
            arrayElement.forEach(element => {
                element.value="";
            });
            setErrors(errorMsg)
            setValues({
                username : '',
                email : '',
                phone : '',
                password1 : '',
                password2 : ''
            })
        }
        
        
    }
    return {handleChange,values,handleSubmit, errors}
    
}

export default useForm;