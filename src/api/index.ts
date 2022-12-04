import axios from 'axios';
import {apiUrl} from "../utils/consts";

const instance = axios.create({
    baseURL: apiUrl
})


export default instance
