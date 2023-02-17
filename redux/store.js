import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {testimony} from './api/testimony'

export const store = configureStore({
    reducer:{
        [testimony.reducerPath]: testimony.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(testimony.middleware)
    }
})

setupListeners(store.dispatch)

export {useFetchTestimonyQuery} from './api/testimony'