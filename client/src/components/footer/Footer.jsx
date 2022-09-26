import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyright}>Klayklay ⓒ{ new Date().getFullYear() } All Right Resolved.</div>
      </div>
    </footer>
  )
}