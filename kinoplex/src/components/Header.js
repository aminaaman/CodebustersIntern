import React, { Component } from 'react'
import logo from '../images/logos.png'
import styled from 'styled-components'


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <img src={logo} className="logo" alt="" />
                <div className="rectangle">
                    <p className="cityText">Алматы</p>
                </div>
                <div className="navigation">
                    <div className="navigationText">
                        <a href="#home" className="navigationText">Расписание</a>
                        <a href="#link" className="navigationText">Скоро</a>
                        <a href="#link" className="navigationText">Еда и напитки</a>
                        <a href="#link" className="navigationText">Мой Kinopark</a>
                    </div>
                    <div className="login">
                        <a href="#link" className="navigationText">Вход/Регистрация</a>
                    </div>
                    <div className="lang">
                        <a href="#link" className="navigationText">Рус</a>
                    </div>
                    <div className="triangle"></div>

                </div>
            </HeaderComponent>
        )
    }
}


export default Header;

//Header Container
const HeaderComponent = styled.div`
    .logo{
        position: absolute;
        width: 120px;
        height: 49px;
        left: 200px;
        top: 8px;
    }
    .rectangle{
        position: absolute;
        width: 136px;
        height: 32px;
        left: 384px;
        top: 16px;
        /* Reds/Brand red */

        background: #C31D28;
        border-radius: 3px;
    }
    .cityText{
        position: absolute;
        height: 22px;
        left: 32px;
        right: 28px;
        top: calc(50% - 50px/2);
        /* Body/Body Bold */
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        color: #FFFFFF;
    }
    .navigation{
        position: absolute;
        height: 41px;
        left: 568px;
        top: 0px;
        padding: 24px; 

    }
    .navigationText{
        display: inline-block;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
        /* identical to box height */
        color: #FFFFFF;
    }
    .login{
        position: absolute;
        width: 133px;
        height: 18px;
        left: 400px;
        top: 23px;
        text-align: right;
    }
    .lang{
        position: absolute;
        width: 23px;
        height: 18px;
        left: 560px;
        top: 23px;
    }
    .triangle{
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    
        border-top: 5px solid white;
        position: absolute;
        left: 183%;
        right: 25.81%;
        top: 35%;
        bottom: 30%;
    }


`;
