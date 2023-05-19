import { Col, Row } from 'antd'
import React from 'react'
export default function Cart({ productData }) {
    let a = localStorage.getItem('cart')
    let result = JSON.parse(a).flat(2)
    const handleRemove = (e, id) => {
        e.preventDefault();
        let deletedData = [];
        deletedData.push(result.filter((data) => data.cartItemInfo.id !== id))
        localStorage.setItem('cart', JSON.stringify(deletedData))
    }
    return (
        result && result.map((ele, i) => {
            return <Row gutter={2}>
                <Col span={20}>
                    <div style={{ display: 'flex', border: '1px solid #aaa', padding: '10px', margin: '10px' }}>
                        <div><img alt='logo' style={{ width: '100px' }} src={ele.cartItemInfo.images[0]} /></div>
                        <div style={{ margin: '15px' }}>{ele.cartItemInfo.title}</div>
                        <div style={{ margin: '15px' }}>{ele.cartItemInfo.description}</div>
                        <div style={{ margin: '15px' }}>Rs. {ele.cartItemInfo.price}</div>
                    </div>
                    <div>
                        <button style={{ padding: '10px 30px', width: '50%', border: '1px solid #aaa', backgroundColor: 'rgb(232 160 31)', cursor: 'pointer' }} onClick={(e) => { handleRemove(e, ele.cartItemInfo.id) }}>remove</button>
                        <button style={{ marginLeft: '10px', padding: '10px 30px', width: '40%', border: '1px solid #aaa', backgroundColor: 'rgb(232 160 31)' }}>place order</button>
                    </div>
                </Col>
                <Col>
                    <div>
                        product info
                    </div>
                    <div>Stock: {ele.cartItemInfo.stock}</div>
                    <div>ratings: {ele.cartItemInfo.rating}</div>
                    <div>Discount(%): {ele.cartItemInfo.discountPercentage}</div>
                </Col>
            </Row>
        })
    )
}
