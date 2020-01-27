import React, { Component } from 'react'
import  '../css/App.css'
import Header from '../components/Header'
import Scrolls from '../components/Scrolls'
import Footer from '../components/Footer'

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Scrolls/>
                <Footer/>
            </div>
         
        )
    }
}

export default Main;