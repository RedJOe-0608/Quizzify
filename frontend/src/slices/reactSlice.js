import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("react") ? JSON.parse(localStorage.getItem("react")) : 
{
        levelNo: 1, //ie your progress
        levelScore: 0,
        levelStatus: " not passed",
        exerciseNo: 3,
        exerciseScore: 0,
        exerciseStatus: " not passed",
        overallScore: 0,
    }
    


const reactSlice = createSlice({
    name: "react",
    initialState,
    reducers: {
        resumeQuiz: (state, action) => {

        },
        resetQuiz: (state) => (state = initialState)
    }
})

export const {resumeQuiz, resetQuiz} = reactSlice.actions

export default reactSlice.reducer