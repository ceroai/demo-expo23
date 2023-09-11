import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './ducks/index'

const store = configureStore({ reducer: rootReducer })

export default store
