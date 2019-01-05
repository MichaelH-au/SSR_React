import axios from 'axios'
import  { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
export const getHomeList = () => {
    return (dispatch) => {
        const list = ['aaa', 'bbb', 'ccc'];
        dispatch(changeList(list))
    }
}