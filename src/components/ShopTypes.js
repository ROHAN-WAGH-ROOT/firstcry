import React, { useEffect, useState } from 'react'
import styles from './ShopTypes.module.css'
import Cards from './Cards'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
export default function ShopTypes() {
    let history = useNavigate();
    const [products, setProducts] = useState();
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        await axios.get('https://dummyjson.com/products').then((res) => {
            setProducts(res?.data)
        }).catch(err => {
            console.log("errr", err?.message);
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.heading}>PREMIUM BOUTIQUES</div>
            <div style={{
                content: "",
                display: 'table',
                clear: 'both',
                margin: '50px'
            }}>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Stay Safe & Healthy'} category={'Face masks, sanitizers, safety gates & more'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29873.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Sports & Style'} category={'Athleisure & Footwear Collection'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29869.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Snooze O Clock | Up to 14Y'} category={'Comfy Nightwear & Pajamas'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29872.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Where sustainability meets style | Up to 14Y'} category={'Sets & Suits, Tops & Tees and more'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29871.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'As unique as you! | Up to 14Y'} category={'Athleisure, Sportswear, Innerwear & more'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29874.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Picks to Fawn Over | Up to 24M'} category={'Rompers, Tops, Sets & more'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29852.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Athletic & Fun | 4 - 14Y'} category={'Athleisure & Footwear Collection'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29859.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Keep Yourself Cool & Comfy  | Up to 12Y'} category={'Face masks, sanitizers, safety gates & more'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29862.webp'} endsOn={'ends in 16 hr'} /></div>
                <div className={styles.cardContainer} onClick={() => history('/products', { state: products })}><Cards title={'Stay Safe & Healthy'} category={'Face masks, sanitizers, safety gates & more'} status={'NEW TODAY'} image={'//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29865.webp'} endsOn={'ends in 16 hr'} /></div>
            </div>
        </div>
    )
}
