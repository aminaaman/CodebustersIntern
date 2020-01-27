import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logos2.png'
import group1 from '../images/group1.png'
import group3 from '../images/group3.png'
import group5 from '../images/group5.png'


class Footer extends Component {
    render() {
        return (
            <FooterComponent>
                <div className="footer">
                    <img src={logo} className="logo1" alt=""></img>
                    <img src={group1} className="group1" alt=""></img>
                    <div className="group2">
                        <div className="liltext">
                            <p>Афиша</p>
                        </div>
                        <div className="text">
                            <p>Сегодня в кино</p>
                            <p>Скоро на экранах</p>
                            <p>Эксклюзивный контет</p>
                        </div>
                    </div>
                    <img src={group3} className="group3" alt=""></img>
                    <div className="group4">
                        <div className="liltext">
                            <p>О компании</p>
                        </div>
                        <div className="text">
                            <p>О нас</p>
                            <p>Кинотеатры</p>
                            <p>Для бизнеса</p>
                            <p>Партнеры</p>
                            <p>Новости</p>
                            <p>Контакты</p>

                        </div>
                    </div>
                    <img src={group5} className="group5" alt=""></img>

                </div>
            </FooterComponent>
        )
    }
}

export default Footer;

const FooterComponent = styled.div`
.footer{
    position: absolute;
    width: 1440px;
    height: 406px;
    left: 0px;
    top: 2300px;
}
.logo1{
    position: absolute;
    width: 212px;
    height: 136px;
    left: 200px;
    top: 56px;

}
.group1{
    position: absolute;
    width: 212px;
    height: 67px;
    left: 200px;
    top: 224px;
}
.group2{
    position: absolute;
    width: 175px;
    height: 124px;
    left: 535px;
    top: 56px;
}
.liltext{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;

    color: #AAAAAA;

}
.text{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #FFFFFF;
}
.group3{
    position: absolute;
    width: 224px;
    height: 58px;
    left: 535px;
    top: 236px;
}
.group4{
    position: absolute;
    width: 97px;
    height: 238px;
    left: 833px;
    top: 56px;
}
.group5{
    position: absolute;
    width: 132px;
    height: 100px;
    left: 1023px;
    top: 57px;
}
`;