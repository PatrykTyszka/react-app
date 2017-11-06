import React from 'react';

class SignUp extends React.Component {
    render() {
        return(
            <div className="sub-content">
                <h1>Sign Up</h1>
                <SignUpForm />
            </div>
        )
    }
}

class SignUpForm extends React.Component {
    render() {
        return(
            <form>
                <label>Email:</label>
                <input type="text" />
                <br />
                <label>Password:</label>
                <input type="password" />
                <br />
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default SignUp;