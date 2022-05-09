import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/product'
import shopping from './modules/shopping'
import userinfo from './modules/userinfo'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products,
    shopping,
    userinfo
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
