import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
    <footer className={styles.footer}>
        <small>Contact Person:<br /></small>
        Joakim Strandell<br />
        <a href="tel:0707294379">070 729 43 79</a><br />
        <a href="mailto:joakim@awkwardgroup.com">joakim@awkwardgroup.com</a><br />
        <a href="https://www.linkedin.com/in/joakimstrandell/">LinkedIn</a> / <a href="https://twitter.com/joakimstrandell">Twitter</a>
    </footer>
)

export default Footer
