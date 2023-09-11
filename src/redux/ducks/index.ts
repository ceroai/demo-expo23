import { combineReducers } from 'redux'
import keyboard from './keyboard'
import editor from './editor'

const rootReducer = combineReducers({
  editor,
  keyboard,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
