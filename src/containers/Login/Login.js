import React, {Component} from 'react';
import Header from '../../componentes/Header'

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    Login
                </div>
            </div>
        );
    }
}

Login.loadData = (store) => {
    console.log('login data')
}
export default Login;