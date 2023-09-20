import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import javascriptSliceReducer from './slices/javascriptSlice'
import pythonSliceReducer from './slices/pythonSlice'
import reactSliceReducer from './slices/reactSlice'

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        javascript: javascriptSliceReducer,
        python: pythonSliceReducer,
        react: reactSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store