import { CircularProgress, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/productSlice';
import ProductCard from './ProductCard';
import '../css/ProductCard.css'

function ProductList() {
    const dispatch = useDispatch();
    const { products, status } = useSelector((store) => store.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [])
    if (status === 'loading') return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CircularProgress size={60} />
        </div>
    );
    if (status === 'false') return <p>Bilinmeyen bir hata oluştu</p>

    return (
        <>
            <h1 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "45px" }}>ÜRÜN LİSTESİ</h1>
            < div className='card-wrapper' >
                < div className="product-header" >
                    <p>Ürün Adı</p>
                    <p>Fiyat</p>
                    <p>Kategori</p>
                    <p>Stok</p>
                    <p>ID</p>
                    <p style={{ width: "80px" }}></p>
                </div >
                <div>
                    {products && products.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                    {products.length === 0 && <p style={{ marginTop: "32px", fontSize: "18px", color: "white" }}>Ürün Bulunamadı</p>}
                </div>
            </div >
        </>
    )
}

export default ProductList