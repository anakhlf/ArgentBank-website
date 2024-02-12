import React from 'react';
import "./style.css"
import Form from '../../common/containers/Form/index'



function SignUp () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
            </section>    
        </main>
    )
}

export default SignUp;