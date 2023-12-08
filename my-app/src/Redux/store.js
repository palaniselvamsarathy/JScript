/*import {createStore} from 'redux'
// import { messageReducer } from './Message/message.reducer'
// import {composeWithDevTools} from '@redux-devtools/extension'
let store=createStore(messageReducer)

export {store}
*/


import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

let store = createStore(rootReducer)

export {store}