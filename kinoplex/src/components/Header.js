import React, { Component } from 'react'
import logo from '../images/logos.png'
import styled from 'styled-components'


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-block">
                <img src={logo} className="logo" alt="" />
                <div className="rectangle">
                    <p className="cityText">Алматы</p>
                </div>
                <div className="navigation">
                    <ul className="header-block__nav header-block-first-nav">
                        <li><a href="#home" className="header-block__link">Расписание</a></li>
                        <li><a href="#link" className="header-block__link">Скоро</a></li>
                        <li><a href="#link" className="header-block__link">Еда и напитки</a></li>
                        <li><a href="#link" className="header-block__link">Мой Kinopark</a></li>
                    </ul>
                    <ul class="header-block__nav">
                        <li>
                            <a href="#link" class="header-block__link">Вход / Регистрация</a>
                        </li>
                        <li>
                            <a href="#link" class="header-block__link">Руc</a>
                        </li>
                    </ul>
                </div>
            </HeaderComponent>
        )
    }
}


export default Header;

//Header Container
const HeaderComponent = styled.div`

    .header-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .header-block__link {
        font-size: 1.1rem;
        line-height: 1.8rem;
        color: var(--main-font-color-white);
        position: relative;
        transition: color .3s;
    }
    .header-block-first-nav .header-block__link::before {    
        content: '';
        position: absolute;
        bottom: -2.1rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #FF5656;
        transform: scaleX(0);
        transition: transform .3s;
    }
    .header-block__link:hover {
        color:#fff;
    }
    .header-block-first-nav .header-block__link:hover {
        color: #FF5656;
    }
    
    .header-block-first-nav .header-block__link:hover::before {
        transform: scaleX(1);
    }
    .header-block-first-nav li {
        margin-right: 2.4rem;
    }
    .header-block-first-nav li:last-child {
        margin-right: 0;
    }
    .header-block__nav{
        display: flex;
        align-items: center;
        list-style: none;
    }
    .header-block__nav li {
        margin-top: 1.1rem;
    }
    .header-block__nav:first-child li {
        margin-right: 2.4rem;
    }
    .header-block-first-nav li {
        margin-right: 2.4rem;
    }
    .header-block-first-nav li:last-child {
        margin-right: 0;
    }
    .header-block .header-block__nav:last-child li {
        margin-right: 4rem;
    }
    
    .header-block .header-block__nav:last-child li:last-child {
        margin-right: 0;
    }
    .logo{
        position: absolute;
        width: 120px;
        height: 49px;
        left: 120px;
        top: 8px;
    }
    .rectangle{
        position: absolute;
        width: 136px;
        height: 32px;
        left: 300px;
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
        left: 420px;
        top: -28px;
        padding: 24px; 

        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
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
