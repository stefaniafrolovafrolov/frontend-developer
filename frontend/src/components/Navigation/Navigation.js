//Компонент Navigation представляет навигационное меню.
import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navigation.css"
import account from "../../assets/image-ee/profile777.svg"

function Navigation({ handleClose }) {
  // Функция для смены цвета для активной ссылки
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link"

  return (
    <div className="navigation__page-overlay">
      {/*Рендерится в виде оверлея с классом navigation__overlay.
Оверлей содержит контейнерыnavigation__page-overlay  и navigation__overlay-container. */}

      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        {/*handleClose - обработчик закрытия навигационного меню.*/}

        <button
          className="navigation__close-button"
          onClick={handleClose}
        ></button>
        <nav className="navigation__links">
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/projects" onClick={handleClose} className={setActive}>
            Проекты
          </NavLink>
          <NavLink to="/education" onClick={handleClose} className={setActive}>
            Обо мне
          </NavLink>
        </nav>

        <Link
          to="/profile"
          className="navigation__account-button"
          onClick={handleClose}
        >
          <img src={account} alt="аккаунт" />
        </Link>
      </div>
    </div>
  )
}

export default Navigation
