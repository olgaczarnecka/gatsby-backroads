import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialLinks from "../constants/social-links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, idx) => (
          <AniLink fade key={idx} to={item.path}>
            {item.text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
