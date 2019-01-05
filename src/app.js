import React, {Component} from 'react';
import Header from './componentes/Header'
import { renderRoutes } from 'react-router-config'
import routes from './Routes'

/**
 * Main layout of the web
 * */
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {renderRoutes(routes[0].routes)}
            </div>
        );
    }
}

export default App;