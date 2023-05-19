import React from 'react'
import { Input, Layout } from 'antd'
import { Header } from 'antd/es/layout/layout';
import styles from './Home.module.css';
import NavBar from './NavBar';
export default function Home() {
    const { Search } = Input;
    return (
        <div className={styles.Container}>
            <Layout>
                <Header className={styles.Header}>
                    <img className={styles.HeaderLogo} src={'//cdn.fcglcdn.com/brainbees/images/n/fc_logo.png'} alt='logo' draggable={false} />
                    <Search placeholder='Search for Category, Brand or Product' className={styles.SearchBar} type='search' />
                    <NavBar />
                </Header>
            </Layout>
        </div>
    )
}
