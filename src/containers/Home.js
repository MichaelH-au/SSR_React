import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    Home
                </div>
                <button onClick={()=>alert('button')}>button</button>
            </div>
        );
    }
}

export default Home;