import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState( false );

    // Validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // First Name validation
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if( e.target.value.length < 2 ) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    // Last Name validation
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if( e.target.value.length < 2 ) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    // Email validation
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if( e.target.value.length < 5 ) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    // Password validation
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if( e.target.value.length < 8 ) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    // Confirm Password validation
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if( e.target.value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    // Create a new user function
    const createUser = (e) => {

        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        setHasBeenSubmitted( true );
    };

    // Changing form message on submit
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form";
        } else {
            return "Welcome. Please submit the form";
        }
    };

    return (
        <>
            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => handleFirstName(e) } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => handleLastName(e) } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => handleEmail(e) } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => handlePassword(e) } />
                    {
                        passwordError &&
                        <p>{ passwordError }</p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => handleConfirmPassword(e) } />
                    {
                        confirmPasswordError &&
                        <p>{ confirmPasswordError }</p>
                    }
                </div>
                <button type="submit" className="btn btn-primary">Create User</button>
            </form>
            <hr />
            <div>
                <h3>Your form data</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </>
    );
};

export default Form;