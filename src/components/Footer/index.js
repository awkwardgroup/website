import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
    <footer className={styles.footer}>
        Contact Person:<br />
        Joakim Strandell<br />
        <a href="mailto:joakim@awkwardgroup.com">joakim@awkwardgroup.com</a><br />
        <a href="tel:0707294379">070 729 43 79</a><br />
        <a href="https://www.linkedin.com/in/joakimstrandell/">LinkedIn</a>
    </footer>
)

export default Footer
