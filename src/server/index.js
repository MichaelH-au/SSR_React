import express from 'express'
import { matchRoutes } from 'react-router-config'
import { render } from './utils/initialize'
import { getStore } from '../store/index'
import routes from '../Routes'

const app = express();
app.use(express.static('public'));


app.get('*', function(req, res){
    const store = getStore()
    //add data to store depending on the path of route
    const promises = []
    const matchedRoutes = matchRoutes(routes, req.path);
    matchedRoutes.forEach(item =>{
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(()=>{
        res.send(render(store, routes, req));
    })
});

const server = app.listen(3000)