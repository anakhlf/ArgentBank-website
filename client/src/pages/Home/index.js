import React from 'react';
import "./style.css"


import Menu from '../../common/containers/Menu/index'
import Image from '../../common/containers/Image/index'
import Values from '../../common/containers/Values/index'
import Footer from '../../common/containers/Footer/index'

//COMPOSENTS

function Home () {
    return (
        <div>
            <Menu />
            <main>
                <Image />
                <Values />
            </main>
            <Footer />
        </div>
    )
}

export default Home
