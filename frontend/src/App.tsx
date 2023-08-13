import { AnimatePresence, motion } from "framer-motion"
import React, { useState, useEffect, ReactNode } from "react"
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom"
//import { Education } from './components/Education/Education';
import { Home } from "./components/Home/Home"
/*import { Message } from './components/Message/Message';*/
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import "./style/global.scss"
import AboutMe from "./components/AboutMe/AboutMe"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import * as api from "./utils/MainApi"
import Header from "./components/Header/Header"
import InfoTooltip from "./components/InfoTooltip/InfoTooltip"
import "./App.css"
import Profile from "./components/Profile/Profile"
import InfoToolTipUpdate from "./components/InfoTooltipUpdate/InfoTooltipUpdate"
import CurrentUserContext from "./contexts/CurrentUserContext"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] =
    useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  //ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
  function closeAllPopups() {
    setInfoToolTipPopupOpen(false)
    setInfoToolTipUpdatePopupOpen(false)
  }

  //ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ ПО ОВЕРЛЕЙ
  function closeByOverlay(evt: React.MouseEvent) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
  }
  //ПЕРЕМЕННАЯ ДЛЯ ОТСЛЕЖИВАНИЯ БУЛЕВОГО СОСТОЯНИЯ ПОПАПОВ ПОДТВЕРЖДЕНИЯ И РЕДАКТИРОВАНИЯ ДАННЫХ
  const isOpen = isInfoToolTipPopupOpen

  //useEffect ОТСЛЕЖИВАЮЩИЙ СОСТОЯНИЕ ПОПАПОВ И СОЗДАЕТ И УДАЛЯЕТ СЛУШАТЕЛЬ ЗАКРЫТИЯ ПОПАПОВ ПО ESC
  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        closeAllPopups()
      }
    }
    if (isOpen) {
      // навешиваем только при открытии
      document.addEventListener("keydown", closeByEscape)
      return () => {
        document.removeEventListener("keydown", closeByEscape)
      }
    }
  }, [isOpen])

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    console.log(jwt)
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies")
            setIsLoggedIn(true)
          }
          navigate(path)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo)
        })
        .catch((err) => {
          console.log(err)
        })

        .catch((err) => {
          console.log(err)
        })
    }
  }, [isLoggedIn, navigate])

  type RegistrationData = {
    name: string
    email: string
    password: string
  }

  //регистрация пользователя
  function handleRegister({ name, email, password }: RegistrationData) {
    api
      .register(name, email, password)
      .then(() => {
        setInfoToolTipPopupOpen(true)
        setIsSuccess(true)

        handleAuthorize({ email, password })
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true)

        setIsSuccess(false)
        console.log(err)
      })
  }

  //авторизация пользователя
  function handleAuthorize({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoToolTipPopupOpen(true)
          setIsSuccess(true)
          // Сохраняем JWT-токен в локальном хранилище
          localStorage.setItem("jwt", res.token)

          navigate("/projects", { replace: true })

          setIsLoggedIn(true)
        }
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true)

        setIsSuccess(false)
        console.log(err)
      })
  }

  interface UserInfo {
    name: string
    email: string
  }

  function handleUpdateUser(newUserInfo: UserInfo) {
    // Вызываем метод API для обновления информации о пользователе
    api
      .setUserInfo(newUserInfo)
      .then((data) => {
        // Если обновление прошло успешно (без ошибок), выполняем следующие действия
        setInfoToolTipUpdatePopupOpen(true)
        setIsUpdate(true) // Устанавливаем флаг setIsUpdate в значение true

        setCurrentUser(data) // Устанавливаем новую информацию о пользователе
      })
      .catch((err) => {
        setInfoToolTipUpdatePopupOpen(true)
        // В случае ошибки при обновлении, устанавливаем флаг setIsUpdate в значение false
        setIsUpdate(false)

        console.log(err)
        handleUnauthorized(err) // Обрабатываем ошибку авторизации
      })
  }

  function handleUnauthorized(err: Error | string) {
    // Проверяем, является ли ошибка ошибкой авторизации (401 Unauthorized)
    if (err instanceof Error && err.message === "401") {
      handleSignOut() // Вызываем функцию handleSignOut для выхода из приложения
    }
  }

  const handleSignOut = () => {
    // Устанавливаем флаг isLoggedIn в значение false, указывая, что пользователь вышел из системы
    setIsLoggedIn(false)

    // Удаляем токен авторизации из локального хранилища
    localStorage.removeItem("jwt")

    //localStorage.clear() очищает все данные в локальном хранилище, удалая все элементы.
    localStorage.clear()

    navigate("/education")
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <div className="container">
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />

              <Route
                path="/signup"
                element={
                  <Register onRegister={handleRegister} isLoading={false} />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login onAuthorization={handleAuthorize} isLoading={false} />
                }
              />

              <Route
                path="/education"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="education"
                  >
                    <Header loggedIn={isLoggedIn} />
                    <AboutMe />
                  </motion.div>
                }
              />

              <Route
                path="/projects"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="projects"
                  >
                    <Header loggedIn={isLoggedIn} />
                    <Projects />
                  </motion.div>
                }
              />

              <Route
                path={"/profile"}
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="profile"
                  >
                    <ProtectedRoute
                      path="/profile"
                      signOut={handleSignOut}
                      onUpdateUser={handleUpdateUser}
                      loggedIn={isLoggedIn}
                      component={Profile}
                      isLoading={false}
                    />
                  </motion.div>
                }
              />

              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>

          <Navbar />

          <InfoTooltip
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
          />

          <InfoToolTipUpdate
            isOpen={isInfoToolTipUpdatePopupOpen}
            onClose={closeAllPopups}
            isUpdate={isUpdate}
            onCloseOverlay={closeByOverlay}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
