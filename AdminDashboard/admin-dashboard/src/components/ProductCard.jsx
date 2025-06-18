import React, { useEffect, useState } from 'react'
import '../css/ProductCard.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../redux/productSlice';
import axios from 'axios';


function ProductCard({ product }) {
    if (!product) return null;

    const { name, description, price, stock, category, id } = product;
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        await dispatch(deleteProduct(id));
        dispatch(getProduct())
    }


    return (
        <div className='product-card'>
            <p>{name}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{stock}</p>
            <p>{id}</p>
            <div>
                <button onClick={() => handleDelete(id)} >
                    <DeleteForeverIcon style={{ backgroundColor: 'rgb(145,2,2)', textAlign: "center" }} />
                    <span className="button-text">Sil</span>
                </button>
            </div>
        </div >
    )
}

export default ProductCard