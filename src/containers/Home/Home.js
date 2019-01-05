import React, {Component} from 'react';
import Header from '../../componentes/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {
    componentDidMount(){
        //avoid duplicate request
        if (!this.props.list.length) {
            this.props.getHomeList()
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                    Home {this.props.name}
                </div>
                {
                    this.props.list.map((value, index)=>{
                        return <div key={index}>{value}</div>
                    })
                }
                <button onClick={()=>alert('button')}>button</button>
            </div>
        );
    }
}
Home.loadData = (store) => {
    return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
    list: state.home.newsList,
    name: state.home.name
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);