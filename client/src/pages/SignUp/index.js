import React from 'react';
import "./style.css"
import Menu from '../../common/containers/Menu/index'
import Form from '../../common/containers/Form/index'
import Footer from '../../common/containers/Footer/index'



function SignUp () {
    return (
        <div>
            <Menu />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>    
            </main>
            <Footer />
        </div>
    )
}

export default SignUp;