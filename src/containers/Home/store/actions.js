import axios from 'axios'
import  { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getHomeList = () => {
    return (dispatch) => {
        let promise1 = new Promise(function(resolve, reject) {
            resolve()
        });
        return promise1.then(()=>{
            const list = ['aaa', 'bbb', 'ccc'];
            dispatch(changeList(list))
        });

        /**
         *  async data loading
         *  axios.get('https://....')
         *  .then((res) => {
         *      const list = res.data.list
         *      dispatch(changeList(list))
         *  })
         *
         *
         * */
    }
}