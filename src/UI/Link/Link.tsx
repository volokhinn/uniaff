import React from 'react'
import styles from './Link.module.scss'

interface LinkProps {
    children: React.ReactNode;
    link: string;
  }

const Link:React.FC<LinkProps> = ({children, link}) => {
  return (
    <a href={link} className={styles.link}>{children}</a>
  )
}

export default Link