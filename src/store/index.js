import { createStore } from 'vuex'

import publication from '../modules/publications/store/publication'
import category from '../modules/publications/store/category'


const store = createStore({
    modules: {
        publication,
        category
    }
})




export default store