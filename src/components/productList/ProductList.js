import React from 'react'
import './productList.css';
import Product from '../product/Product';
import {products} from '../../data'

function ProductList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>
            Projects
            </h1>
            <p className='pl-desc'>
           
            </p>
        </div>
        <div className='pl-list'>
            {
                products.map(product=>(
                    <Product key={product.id} link={product.link} img={product.img} />
                ))
            }
            
        </div>
    </div>
  )
}

export default ProductList