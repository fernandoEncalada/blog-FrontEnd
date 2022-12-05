import { createStore } from 'vuex'

import publication from '../modules/publications/store/publication'


const store = createStore({
    modules: {
        publication
    }
})




export default store