import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import shopping from './modules/shopping'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products,
    shopping
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
