import React from 'react';

// import our own custom form hooks
import useForm from "../components/OurOwnCustomHooks/useForm";


const Form = () => {
    // our own custom form hooks
    const { values, handleChange, handleSubmit } = useForm(login);


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
                                    value={values.firstName}
                                    onChange={handleChange}
                                    required  
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    name="lastName"  
                                    placeholder="Enter Last Name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    required   
                                />
                            </div>
                            </div>
                            <div className="field">
                                <label className="label">Email Address</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="email" 
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required   
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    required   
                                />
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
