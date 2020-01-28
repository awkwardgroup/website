import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
  
    return(
        <header className={styles.header}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Logotype" width="300px" />
        </header>
    )
}

export default Header
