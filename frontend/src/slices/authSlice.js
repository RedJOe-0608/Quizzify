import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state,action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout: (state,action) => {
            state.userInfo = null;
            localStorage.clear();
            localStorage.removeItem('userInfo');
        },
        updateUserJavascriptExercise: (state,action) => {
            state.userInfo.javascript = JSON.parse(localStorage.getItem('javascript'))
            localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
        },
        updateUserReactExercise: (state,action) => {
            state.userInfo.react = JSON.parse(localStorage.getItem('react'))
            localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
        },
        updateUserPythonExercise: (state,action) => {
            state.userInfo.python = JSON.parse(localStorage.getItem('python'))
            localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
        }
    }
})

export const {setCredentials, logout, updateUserJavascriptExercise,updateUserPythonExercise,updateUserReactExercise} = authSlice.actions

export default authSlice.reducer