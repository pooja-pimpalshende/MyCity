import { useState } from "react";
import axios from "axios";

const useForm = (validate) => {
    const [values, setValues] = useState({
        businessname: "",
        email: "",
        phone: "",
        orgname: "",
        plotno: "",
        street: "",
        city: "",
        distt: "",
        state: "",
        pin: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values, //idhar se values use krenge apan.....
            [e.target.name]: e.target.value,
            //idhar value aaa rahi he form se store ho rahi he field me.....
        });
        console.log("changed");
    };

    const handleSubmit = (e) => {
        const data = {
            stationary_name: values.orgname,
            phone_no: values.phone,
            email: values.email,
            house_no: values.plotno,
            street: values.street,
            city: values.city,
            district: values.distt,
            state: values.state,
            pincode: values.pin,
        };
        axios({
            method: "post",
            url: "http://localhost:8081/stationarys",
            data: data,
            headers: { "Content-Type": undefined }, //this is very important to send the data make sure cors is enabled.
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        e.preventDefault();

        const errorMsg = validate(values);

        if (Object.keys(errorMsg).length !== 0) {
            return setErrors(errorMsg);
        }
        const inputElements = document.querySelectorAll("input");
        if (inputElements) {
            const arrayElement = Array.from(inputElements);
            arrayElement.forEach((element) => {
                element.value = "";
            });
            setErrors(errorMsg);
            setValues({
                businessname: "",
                email: "",
                phone: "",
                orgname: "",
                plotno: "",
                street: "",
                city: "",
                distt: "",
                state: "",
                pin: "",
            });
        }
    };
    return { handleChange, values, handleSubmit, errors };
};

export default useForm;