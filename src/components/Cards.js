import React from 'react'
import styles from './Cards.module.css'
export default function Cards({ image, title, category, status, endson }) {
  return (
    <div>
      <div className={styles.container} >
        <img className={styles.image} src={image} alt='logo'/>
        <div className={styles.endson}>{endson}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.status}>{status}</div>
      </div>
    </div>
  )
}
