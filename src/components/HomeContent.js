import { Carousel } from 'antd'
import React from 'react'
import styles from './Home.module.css'
import ShopTypes from './ShopTypes'

export default function HomeContent() {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={{
                        display: 'block',
                        height: '500px',
                        color: '#fff',
                        lineHeight: '160px',
                        textAlign: 'center',
                    }}>
                        <img alt='logo' className={styles.img} src='https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_bgn_18thmay1684323587886.webp'></img>
                    </h3>
                </div>
                <div>
                    <h3 style={{
                        height: '500px',
                        color: '#fff',
                        lineHeight: '160px',
                        textAlign: 'center',
                    }}><img alt='logo' className={styles.img} src='https://cdn.fcglcdn.com/brainbees/banners/sebamed_baby_994-x-399-21683194532261.webp'
                    ></img></h3>
                </div>
                <div>
                    <h3 style={{
                        height: '500px',
                        color: '#fff',
                        lineHeight: '160px',
                        textAlign: 'center',
                    }}>
                        <img alt='logo' className={styles.img} src='https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_svs_17may231684223357913.webp'></img>
                    </h3>
                </div>
                <div>
                    <h3 style={{
                        height: '500px',
                        color: '#fff',
                        lineHeight: '160px',
                        textAlign: 'center',
                    }}><img alt='logo' className={styles.img} src='https://cdn.fcglcdn.com/brainbees/banners/r_for_rabit_hp_mkt_po3_all_2_1675494199391.webp'></img></h3>
                </div>
            </Carousel>
            <ShopTypes />
        </div>
    )
}
