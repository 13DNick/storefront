import axios from 'axios';

export default axios.create({
    baseURL: 'http://155.138.139.231:8080/api'
});