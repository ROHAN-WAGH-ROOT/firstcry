import React from 'react'
import styles from './NavBar.module.css'
import { Badge } from 'antd'
import { Link } from 'react-router-dom'
export default function NavBar() {
    let data = [];
    let count = 0;
    let array = (JSON.parse(localStorage.getItem('cart')))
    data.push(array);
    count = ((data).flat(2).length);
    return (
        <div className={styles.Container}>
            {/* <a className={styles.navigation} href='/'>Select Location</a>
            <a className={styles.navigation} href='/'>Stores & Preschools</a>
            <a className={styles.navigation} href='/'>Support</a>
            <a className={styles.navigation} href='/'>Track Order</a>
            <a className={styles.navigation} href='/'>First Cry Parenting</a> */}
            <Link className={styles.navigation} to='/Login'>Login / Register</Link>
            <Link className={styles.navigation} to='/'>Shortlist</Link>
            <Link className={styles.navigation} to='/cart'><div>Cart</div><Badge count={count}></Badge></Link>
        </div>
    )
}
