import React, { Component } from 'react'
import styled from 'styled-components'
import image1 from "../images/image1.1.png";
import image2 from '../images/image1.2.png';
import image3 from "../images/image1.3.png";
import image4 from '../images/image1.4.png';
import image5 from '../images/image1.5.png';

import image6 from "../images/image2.1.png";
import image7 from '../images/image2.2.png';
import image8 from "../images/image2.3.png";
import image9 from '../images/image2.4.png';
import image10 from '../images/image2.5.png';

import image11 from "../images/image3.1.png";
import image12 from '../images/image3.2.png';
import image13 from "../images/image3.3.png";
import image14 from '../images/image3.4.png';
import image15 from '../images/image3.5.png';

import image16 from "../images/image4.1.png";
import image17 from '../images/image4.2.png';
import image18 from '../images/image4.3.png';


class Scrolls extends Component {
    render() {
        return (
            <ScrollComponent>
                <div className="today">
                    <p className="todayText">Сегодня в кино</p>
                    <p className="lilText">Смотреть полное расписание</p>
                    <div className="poster1">
                        <img src={image1} className="images" alt=""></img>
                        <span className="posterText">План побега 3</span>

                    </div>
                    <div className="poster1">
                        <img src={image2} className="images" alt=""></img>
                        <span className="posterText">Люди в черном: Интернэшнл</span>

                    </div>
                    <div className="poster1">
                        <img src={image3} className="images" alt=""></img>
                        <span className="posterText">За мечтой</span>

                    </div>
                    <div className="poster1">
                        <img src={image4} className="images" alt=""></img>
                        <span className="posterText">Аладдин</span>

                    </div>
                    <div className="poster1">
                        <img src={image5} className="images" alt=""></img>
                        <span className="posterText">Рокетмен</span>

                    </div>
                    
                </div>
                <div className="hot">
                    <p className="hotText">Hot Price</p>
                    <p className="lilText">Узнать подробнее об акции Hot Price</p>
                    <div className="poster1">
                        <img src={image1} className="images" alt=""></img>
                        <span className="posterText">План побега 3</span>

                    </div>
                    <div className="poster1">
                        <img src={image2} className="images" alt=""></img>
                        <span className="posterText">Люди в черном: Интернэшнл</span>

                    </div>
                    <div className="poster1">
                        <img src={image3} className="images" alt=""></img>
                        <span className="posterText">За мечтой</span>

                    </div>
                    <div className="poster1">
                        <img src={image4} className="images" alt=""></img>
                        <span className="posterText">Аладдин</span>

                    </div>
                    <div className="poster1">
                        <img src={image5} className="images" alt=""></img>
                        <span className="posterText">Рокетмен</span>

                    </div>
                </div>
                <div className="soon">
                    <p className="todayText">Скоро на экранах</p>
                    <p className="lilText">Смотреть все предстоящие фильмы</p>
                    <div className="poster1">
                        <img src={image6} className="images" alt=""></img>
                        <span className="posterText">Король лев</span>

                    </div>
                    <div className="poster1">
                        <img src={image7} className="images" alt=""></img>
                        <span className="posterText">Искусство обмана</span>

                    </div>
                    <div className="poster1">
                        <img src={image8} className="images" alt=""></img>
                        <span className="posterText">Мышеловка</span>

                    </div>
                    <div className="poster1">
                        <img src={image9} className="images" alt=""></img>
                        <span className="posterText">Обитель тьмы</span>

                    </div>
                    <div className="poster1">
                        <img src={image10} className="images" alt=""></img>
                        <span className="posterText">Солнцестояние</span>

                    </div>
                </div>
                <div className="theatre">
                    <p className="todayText">Театр HD</p>
                    <p className="lilText">Смотреть все постановки</p>
                    <div className="poster1">
                        <img src={image11} className="images" alt=""></img>
                        <span className="posterText">Лебединое озеро</span>

                    </div>
                    <div className="poster1">
                        <img src={image12} className="images" alt=""></img>
                        <span className="posterText">Жизель</span>

                    </div>
                    <div className="poster1">
                        <img src={image13} className="images" alt=""></img>
                        <span className="posterText">Севильский церюльник</span>

                    </div>
                    <div className="poster1">
                        <img src={image14} className="images" alt=""></img>
                        <span className="posterText">Богема</span>

                    </div>
                    <div className="poster1">
                        <img src={image15} className="images" alt=""></img>
                        <span className="posterText"></span>

                    </div>
                </div>
                <div className="news">
                    <p className="todayText">Новости Kinopark</p>
                    <br></br>
                    <p className="lilText">Читать все новости</p>
                    <div class="news-row">
                        <div class="news-info">
                            <div class="news-info__img">
                                <img src={image16} className="images" alt=""></img>
                            </div>
                            <div class="news-info__wrapper">
                                <p class="news-info__date">
                                    9 августа, 2019 г.
                                </p>
                                <h3 class="news-info__title">
                                    «Кино Ночь» в стиле MIAMI в <br></br>
                                    Kinopark 5 Atakent
                                </h3>
                                <p class="news-info__text">
                                    17 августа приходите одетыми в стиле MIAMI и получите бесплатный комбо на...
                                </p>
                        </div>
                    </div>
                    <div class="news-info">
                        <div class="news-info__img">
                            <img src={image17} className="images" alt=""></img>
                        </div>
                        <div class="news-info__wrapper">
                            <p class="news-info__date">
                                1 августа, 2019 г.
                            </p>
                            <h3 class="news-info__title">
                                Семейный Фестиваль в <br></br>
                                Kinoplexx Sary Arka
                            </h3>
                            <p class="news-info__text">
                                Дорогие Алматинцы, приглашаем вас на Семейный Фестиваль в ресторане Plov&...
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias delectus totam quam optio. Incidunt cupiditate reiciendis dolor laborum quos consequatur exercitationem id ad, culpa obcaecati natus dolorum iure quasi saepe.
                            </p>
                        </div>
                    </div>
                    <div class="news-info">
                        <div class="news-info__img">
                            <img src={image18} className="images" alt=""></img>
                        </div>
                        <div class="news-info__wrapper">
                            <p class="news-info__date">
                                29 июля, 2019 г.
                            </p>
                            <h3 class="news-info__title">
                                Kinopark объявляет финальные скидки
                            </h3>
                            <p class="news-info__text">
                                Крупнейшая кинотеатральная компания <br></br>
                                Казахстана устраивает небывалую распр...
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quaerat nesciunt exercitationem. Illo doloremque veritatis fuga quaerat nostrum, eaque velit beatae sequi possimus, magni vero rerum architecto repellat expedita.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

                
            </ScrollComponent>
        )
    }
}
export default Scrolls;

const ScrollComponent = styled.div`
.lilText{
    top: 150px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    text-align: right;

    color: #FFFFFF;
}
.today{
    position: relative;
    width: 1136px;
    height: 400px;
    left: 100px;
    top: 100px;
}
.todayText{
    position: absolute;
    width: 289px;
    height: 49px;
    left: 100px;
    top: -25px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    
    color: #FFFFFF;
}
.hot{
    position: absolute;
    width: 1136px;
    height: 392px;
    left: 100px;
    top: 470px;
        
    background: #4E4E4E;
    opacity: 0.2;
}
.hotText{
    position: absolute;
    width: 289px;
    height: 49px;
    left: 100px;
    top: -20px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    
    color: #FFD362;
}
.soon{
    position: absolute;
    width: 1136px;
    height: 392px;
    left: 100px;
    top: 880px;
}
.theatre{
    position: absolute;
    width: 1136px;
    height: 392px;
    left: 100px;
    top: 1300px;
}
.news{
    position: absolute;
    width: 1040px;
    height: 503px;
    left: 100px;
    top: 1700px;
    overflow:hidden;
    white-space:nowrap;
}
.poster1{
    vertical-align: top;
    display: inline-block;
    padding: 25px;
    width: 164px;
    height: 319px;
    left: 100px;
    
}
.images{
    border-radius: 3px;
    vertical-align: top;
    left: 100px;
    z-index: 100;


}
.posterText{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    display: block;

    color: #FFFFFF;
}
.poster2{
    vertical-align: top;
    display: inline-block;
    padding: 20px;
    width: 304px;
    height: 430px;
    left: 100px;
    
}

.news-row {
    display: flex;
    justify-content: space-between;
}

.news-info {
    width: 304px;
    position: relative;
    border-radius: 3px;
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    color: #4E4E4E;
}
.news-info__img img {
    width: 100%;
}
.news-info__wrapper{
    position: absolute;
    padding: 16px;
    background: rgba(255, 255, 255, 0.95);
    bottom: 0px;
    left: 0px;
}
.news-info__text{
    margin-bottom: 0;
    max-height: 44px;
    max-width: 272px;
    overflow: hidden;
    text-overflow: ellipsis;

}
.news-info__date{
    margin-bottom: 8px;
}
.news-info__title{
    font-weight: bold;
    font-size: 16px;
    color: #0E0E0E;
    margin-bottom: 8px;
}
`;