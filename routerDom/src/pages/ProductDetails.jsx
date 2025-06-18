import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from './Product';
import Products from '../Components/Products';

function ProductDetails() {
    const { id } = useParams();
    return (
        <div>
            <h1>Ürün detayları</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Products product={product} />;
                    }
                })
            }
        </div>
    )
}

export default ProductDetails