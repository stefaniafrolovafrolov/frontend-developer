import React from "react"
import avatar from "../../assets/projects/ScreenshotVadim.png"
import "./AboutMe.css"
import "../Header/Header.css"

function AboutMe() {
  return (
    <div className="about-wrapper">
      <section className="about-me">
        <div className="about-me__container">
          <div className="about-me__text-block">
            <h3 className="about-me__title">Фролов Вадим</h3>
            <h4 className="about-me__info">Фронтенд-разработчик, 36 лет</h4>
            <p className="about-me__description">
              Я живу в городе Коломна московская область, закончил факультет
              экономики ПВГУС. Я люблю слушать музыку, а ещё увлекаюсь бегом и
              ездой на автомобилях. Недавно начал писать код. С 2014 года по
              2021 год занимался собственным производством мебели и лестниц из
              массива натурального дерева. У меня есть музыкальное образование,
              7 лет я учился в музыкальной школе игре на фортепиано. После того,
              как прошел курс по веб-разработке, начал заниматься
              фриланс-заказами и ушел с головой в разработку. Мне очень нравится
              писать код и решать сложные поставленные задачи. Я очень быстро
              учусь новым технологиям и применяю их на практике. Для того, чтобы
              больше узнать обо мне и моих навыках, пройдите регистрацию и
              авторизуйтесь в моем мини приложении.
            </p>
            <a
              href="https://github.com/stefaniafrolovafrolov"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img src={avatar} alt="мое фото" className="about-me__photo" />
        </div>
      </section>
    </div>
  )
}

export default AboutMe
