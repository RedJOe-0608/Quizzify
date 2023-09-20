import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("python") ? JSON.parse(localStorage.getItem("python")) : 
{
        levelNo: 1, //ie your progress
        levelScore: 0,
        levelStatus: " not passed",
        exerciseNo: 1,
        exerciseScore: 0,
        exerciseStatus: " not passed",
        overallScore: 0,
    }
    


const pythonSlice = createSlice({
    name: "python",
    initialState,
    reducers: {
        resumeQuiz: (state, action) => {

        },
        resetQuiz: (state) => (state = initialState)
    }
})

export const {resumeQuiz, resetQuiz} = pythonSlice.actions

export default pythonSlice.reducer