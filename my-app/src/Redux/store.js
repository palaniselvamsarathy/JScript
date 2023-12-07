import {createStore} from 'redux'
import { messageReducer } from './Message/mesaage.reducer'
let store=createStore(messageReducer)

export {store}