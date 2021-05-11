import Vue from 'vue'
import Vuex from 'vuex'
import companies from './modules/companies'
import { state, mutations} from './default'
import cart from './modules/cart/cart'
import auth from './modules/auth/auth'
Vue.use(Vuex)

const store = new Vuex.Store(
    {
        modules:
        {
            companies,
            cart,
            auth
        },
        state,
        mutations
    }
)

export default store
