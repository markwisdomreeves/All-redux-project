

export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password ="Password must be at least 8 characters";
    }

    if (!values.firstName) {
        errors.firstName = "First name field is required";
    } else if (values.firstName < 0 || '') {
        errors.firstName = "First name field can't be empty";
    }

    if (!values.lastName) {
        errors.lastName = "Last name field is required";
    } else if (values.lastName < 0 || '') {
        errors.lastName = "Last name field can't be empty";
    }

    return errors;
};