import React from "react"
import styles from "./Home.module.scss"
import Profile from "../../assets/img/photoVadim.jpg"
import { GITHUB_LINK, TELEGRAM } from "../../constants/links"
import { motion } from "framer-motion"
import telegramImage from "../../assets/img/icontelegram.png"
import GithubImage from "../../assets/img/github.svg"

export const Home = () => {
  return (
    <motion.section className={styles.container}>
      <div className={styles["name-container"]}>
        <div className={styles.profile}>
          <motion.h2
            className={styles.hello}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.emoji}>Привет👋, Я </span> FULL-STACK
          </motion.h2>
          <motion.h2
            className={styles.prof}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            DEVELOPER
          </motion.h2>
          <div className={styles.tags}>
            <span className={styles.tag}>JS</span>
            <span className={styles.tag}>JS</span>
          </div>
        </div>
        <div className={styles["links-container"]}>
          <motion.a
            href={TELEGRAM}
            className={styles.link}
            initial={{ opacity: 0, scale: 0, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
          >
            <img src={telegramImage} className={styles.image} alt="" />
            Telegram
          </motion.a>
          <motion.a
            href={GITHUB_LINK}
            className={styles.link}
            initial={{ opacity: 0, scale: 0, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
          >
            <img src={GithubImage} className={styles.image} alt="" />
            GitHub
          </motion.a>
        </div>
        <div className={styles.name}>
          <motion.h1
            className={styles["first-name"]}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
          >
            Вадим
          </motion.h1>
          <motion.h1
            className={styles["last-name"]}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
          >
            Фролов
          </motion.h1>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <div className={styles["img-container"]}>
          <motion.h4
            className={`${styles.project} ${styles.tag}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={styles.span}>18</span> projects
          </motion.h4>
          <motion.h4
            className={`${styles.lang} ${styles.tag}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            English <span className={styles.span}>a2</span>
          </motion.h4>
          <motion.h4
            className={`${styles.expires} ${styles.tag}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className={styles.span}>1+ year</span> experience
          </motion.h4>
          <img src={Profile} alt={""} className={styles.img} />
        </div>
      </div>
    </motion.section>
  )
}
