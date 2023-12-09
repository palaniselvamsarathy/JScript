/*import {createStore} from 'redux'
// import { messageReducer } from './Message/message.reducer'
// import {composeWithDevTools} from '@redux-devtools/extension'
let store=createStore(messageReducer)

export {store}
*/


import { createStore ,applyMiddleware} from "redux";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
let middleware = [logger, thunk] 
let store = createStore(rootReducer,applyMiddleware(...middleware))

export {store}