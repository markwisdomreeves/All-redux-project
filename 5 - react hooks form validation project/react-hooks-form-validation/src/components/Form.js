import React from 'react';

// import our own custom form hooks
import useForm from "../components/OurOwnCustomHooks/useForm";

// import our own validation rules
import validate from "./OurOwnFormValidation/LoginFormValidationRules";


const Form = () => {
    // our own custom form hooks
    const { 
        values, 
        handleChange, 
        handleSubmit, 
        errors 
    } = useForm(login, validate);


    function login() {
        console.log(values); 
    }

    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form onSubmit={handleSubmit}>

                            <div className="field">
                                <label className="label">First Name</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="Enter First Name"
                                    value={values.firstName || ''}
                                    onChange={handleChange}   
                                />
                                {errors.firstName && (
                                    <p className="help is-danger">{errors.firstName}</p>
                                )}
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input 
                                    className={`input ${errors.lastName && 'is-danger'}`} 
                                    type="text" 
                                    name="lastName"  
                                    placeholder="Enter Last Name"
                                    value={values.lastName || ''}
                                    onChange={handleChange}
                                />
                                {errors.lastName && (
                                    <p className="help is-danger">{errors.lastName}</p>
                                )}
                            </div>
                            </div>

                            <div className="field">
                                <label className="label">Email Address</label>
                                <div className="control">
                                    <input 
                                    className={`input ${errors.email && 'is-danger'}`} 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={values.email || ''}
                                    onChange={handleChange}  
                                />
                                {errors.email && (
                                    <p className="help is-danger">{errors.email}</p>
                                )}
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input 
                                    className={`input ${errors.password && 'is-danger'}`} 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter Password"
                                    value={values.password || ''}
                                    onChange={handleChange} 
                                />
                                {errors.password && (
                                    <p className="help is-danger">{errors.password}</p>
                                )}
                                </div>
                            </div>

                            <button type="submit" className="button is-block is-info is-fullwidth">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
