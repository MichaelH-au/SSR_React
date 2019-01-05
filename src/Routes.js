import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import App from './app'

console.log(Home.loadData)
export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                loadData: Home.loadData,
                key:'home',

                /**
                 *
                 *    sub router
                 *    routes: [{
                 *       path: '/test',
                 *       component: Login,
                 *       exact: true,
                 *       key:'test'
                 *    }]
                 */
            },
            {
                path: '/login',
                component: Login,
                exact: true,
                // loadData: Login.loadData,
                key:'login'
            }
        ]
    }
]

// export default (
//     <div>
{/*<Route path='/' exact component={Home}></Route>*/}
{/*<Route path='/login' exact component={Login}></Route>*/}
// </div>
// )