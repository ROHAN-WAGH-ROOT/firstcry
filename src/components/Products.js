import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Product.module.css'

export default function Products({ getCartsProducts }) {
    const [data, setData] = useState({});
    const [cartItemInfo, setAddCart] = useState([]);
    let location = useLocation();
    useEffect(() => {
        location?.state && setData(location?.state)
    }, [location?.state])


    const handleCart = (ele) => {
        setAddCart([...cartItemInfo, { cartItemInfo: ele }])
        getCartsProducts([...cartItemInfo, { cartItemInfo: ele }]);

        let a = localStorage.getItem('cart')
        let result = JSON.parse(a).flat(2)

        let array = [];
        array.push([...result, { cartItemInfo: ele }])
        localStorage.setItem('cart', JSON.stringify(array))
    }
    return (
        <div>
            <div>
                <img alt='logo' style={{ width: '100%' }} src='//cdn.fcglcdn.com/brainbees/images/boutique/994x295/29873.webp' />
            </div>
            <div style={{
                content: "",
                display: 'table',
                clear: 'both',
                margin: '50px'
            }}>
                {data?.products && data.products.map((ele, i) => {
                    return (
                        <div key={ele.id} className={styles.cardContainer}>
                            <div className={styles.container}>
                                <img alt='logo' className={styles.image} src={ele.images[0]} />
                                <div className={styles.title}>{ele?.title}</div>
                                <div className={styles.status}>Rs.{ele?.price}</div>
                                <button onClick={() => {
                                    handleCart(ele)
                                }} className={styles.add}>ADD TO CART</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
