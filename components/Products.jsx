import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'

const Products = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
        <img src={urlFor(image[0].asset._ref).width(250).height(250).url()} alt='product-image' className='product-image' />
        <p className='product-name'>{name}</p>
        <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Products
