import React from 'react';
import "./style.css"


import Menu from '../../containers/Menu/index'
import Image from '../../containers/Image/index'
import Values from '../../containers/Values/index'
import Footer from '../../containers/Footer/index'

//COMPOSENTS

function Home () {
    return (
        <div>
            <main>
                <Menu />
                <Image />
                <Values />
            </main>
            <Footer />
        </div>
    )
}

export default Home
