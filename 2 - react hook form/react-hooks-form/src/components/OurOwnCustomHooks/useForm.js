import { useState } from 'react';


const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();  
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value}))
        console.log(values)
    }

    return {
        handleSubmit,
        handleChange,
        values,
    }
}



export default useForm;