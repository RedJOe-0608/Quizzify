import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("javascript") ? JSON.parse(localStorage.getItem("javascript")) : 
{
        levelNo: 1, //ie your progress
        levelScore: 0,
        levelStatus: " not passed",
        exerciseNo: 2,
        exerciseScore: 0,
        exerciseStatus: " not passed",
        overallScore: 0,
    }
    


const javascriptSlice = createSlice({
    name: "javascript",
    initialState,
    reducers: {
        resumeQuiz: (state, action) => {

        },
        resetQuiz: (state) => (state = initialState)
    }
})

export const {resumeQuiz, resetQuiz} = javascriptSlice.actions

export default javascriptSlice.reducer