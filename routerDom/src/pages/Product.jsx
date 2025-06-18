import React from 'react'
import Products from '../Components/Products'
import { products } from '../data/products'

function Product() {

    return (
        <div>
            {
                products && products.map((product) => (
                    <Products key={product.id} product={product} />
                ))
            }

        </div>
    )
}

export default Product