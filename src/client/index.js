import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../Routes'
import { getClientStore } from '../store/index'
import { renderRoutes } from 'react-router-config'

const store = getClientStore
const App = () => {
    return (
        <Provider store={store()}>
            <BrowserRouter>
                <div>
                    {renderRoutes(routes)}
                    {/*{routes.map((route) => (*/}
                        {/*<Route {...route}/>*/}
                    {/*))}*/}
                </div>
            </BrowserRouter>
        </Provider>
    )
};

ReactDom.hydrate(<App/>, document.getElementById('root'));
