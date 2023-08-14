import React from "react"
import "./Projects.css"
import arrow from "../../assets/image-ee/arrow.svg"
import video from "../../assets/video/bandicamfinish.mp4"
import videoScrinCast from "../../assets/video/yandexscrincast.mp4"

// Компонент с портфолио и ссылками на свои работы.
export const Projects = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__titleOne">Видео демонстрация приложения</h2>
      <video
        className="portfolio__video"
        src={video}
        autoPlay
        muted
        controls
      ></video>

      <h2 className="portfolio__titleOne">Скрин каст классной фишки из CSS</h2>
      <video
        className="portfolio__video"
        src={videoScrinCast}
        autoPlay
        muted
        controls
      ></video>

      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        <a
          href="https://github.com/stefaniafrolovafrolov/frontend-developer"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">
            Ссылка на публичный репозиторий с исходниками этого приложения
          </p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="стрелка для ссылки"
          />
        </a>
        <a
          href="https://cg04348.tmweb.ru/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">
            Адаптивный сайт Vuejs, Nuxtjs
          </p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="стрелка для ссылки"
          />
        </a>
        <a
          href="https://stefaniafrolovafrolov.github.io/react-mesto-auth/"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">
            Одностраничное приложение написаное на курсе Яндекс Практикума
          </p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="стрелка для ссылки"
          />
        </a>
      </nav>
    </section>
  )
}
