import React from "react"
import logo from "../../images/logo.png"
import styles from "./header.module.scss"

const Header = () => (
    <header className={styles.header}>
        <img src={logo} alt="Logotype" />
    </header>
)

export default Header
