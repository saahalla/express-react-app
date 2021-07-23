import React from 'react'

const Home = React.lazy( () => import('./pages/Home') )
const List = React.lazy( () => import('./pages/List') )
const routes = [
    {path: '/products', Component: List},
    {path: '/', Component: Home},
]

export default routes