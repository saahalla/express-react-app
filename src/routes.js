import React from 'react'

const Home = React.lazy( () => import('./pages/Home') )
const ProductList = React.lazy( () => import('./pages/Product/ProductList') )
const ProductSingle = React.lazy( () => import('./pages/Product/Single'))
const ProductCreate = React.lazy( () => import('./pages/Product/Create'))
const ProductUpdate = React.lazy( () => import('./pages/Product/Update'))

const routes = [
    {path: '/product/single/:productId', Component: ProductSingle},
    {path: '/product/update/:productId', Component: ProductUpdate},
    {path: '/product/create', Component: ProductCreate},
    {path: '/products', Component: ProductList},
    {path: '/', Component: Home},
]

export default routes