import React from 'react';
import { HeroBanner, FooterBanner } from '@/components';
import { client } from '@/lib/client';
import Products from '@/components/Products';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner = { bannerData.length && bannerData[0] }/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Products key={product._id} product={product}/>
        ))}
      </div>
      <FooterBanner footerBanner = {bannerData.length && bannerData[0] }/>
    </div>
  )
}

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return { props: { products, bannerData } }
}

export default Home
