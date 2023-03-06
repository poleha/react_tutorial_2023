import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import { ping } from './enhancers/ping'
import  thunk from './enhancers/thunk'
import logger from 'redux-logger'

export const store  = createStore(rootReducer, applyMiddleware(logger, ping, thunk))