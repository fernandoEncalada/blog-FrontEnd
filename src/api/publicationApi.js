import axios from 'axios'

const publicationApi = axios.create({
    baseURL: 'http://localhost:8082/api'
})

export default publicationApi