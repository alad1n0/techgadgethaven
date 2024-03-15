import React from 'react';
import './About.css';
import stol1 from "../../styles/images/product/stol.png"
import stol2 from "../../styles/images/product/stol1.jpg"
import stols from "../../styles/images/product/stol3.jpg"

function AboutPage() {
    return (
        <div className="container">
            <div className="section__header">
                <h3 className="section__suptitle">Про</h3>
                <h2 className="section__title">Компанію</h2>
                <div className="section__text">
                    <p>До послуг наших клієнтів розробка програмного забезпечення на замовлення,
                        проектування інтерфейсів
                        користувача, створення сайтів (у тому числі на основі індивідуальної CMS) та їх
                        підтримка.</p>
                    <p>Ми також пропонуємо послугу IT-консалтингу — налагодження роботи
                        будь-яких інформаційно-аналітичних
                        систем та онлайн рішень компанії для більшої ефективності бізнес-процесів.</p>
                    <p>Сьогодні компанія «Union Smart Technology» має представництва з умілими
                        project-менеджерами.</p>
                    <p>Така географія дозволяє залучати найбільш відповідальних та
                        кваліфікованих програмістів і швидко
                        реагувати на потреби замовників з усього світу, зберігаючи комфортний рівень цін.</p>
                </div>
            </div>
            <div className="card">
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stols} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stol1} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stol2} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="slider">
                    <div className="slider__inner">
                        <div className="slider__item">
                            <span className="slider__num">300000+</span>
                            <span className="slider__text">Заказів</span>
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">5+</span>
                            <span className="slider__text">Філій</span>
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">4+</span>
                            <span className="slider__text">Роки Роботи на ринку</span>
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">80000+</span>
                            <span className="slider__text">Клієнтів</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;