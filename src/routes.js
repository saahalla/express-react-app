import React from 'react'

const Home = React.lazy( () => import('./pages/Home') )
const ProductList = React.lazy( () => import('./pages/Product/ProductList') )
const ProductSingle = React.lazy( () => import('./pages/Product/Single'))

const routes = [
    {path: '/product/single/:productId', Component: ProductSingle},
    {path: '/products', Component: ProductList},
    {path: '/', Component: Home},
]

export default routes