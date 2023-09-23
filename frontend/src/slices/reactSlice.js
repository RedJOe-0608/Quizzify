import { createSlice, current } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("react") ? JSON.parse(localStorage.getItem("react")) : 
{
    "progress": 0,
    "overallScore": 0,
    "level": [
        {
            "levelNo": 1,
            "levelStatus": "not passed",
            "levelScore": 0,
            "isCompleted": false,
            "ex": [
                {
                    "exerciseNo": 1,
                    "exerciseScore": 0,
                    "exerciseStatus": "not passed", 
                }
            ]
        }
    ]
}
    


const reactSlice = createSlice({
    name: "react",
    initialState,
    reducers: {
        resumeQuizReact: (state, action) => {
            const {react} = action.payload.userInfo
            // state = python
            state.progress = react?.progress
            state.overallScore = react?.overallScore
            state.level = react?.level
            localStorage.setItem("react", JSON.stringify(state))
        },
        resetQuizReact: (state,action) => {
            localStorage.removeItem("react")
            console.log(current(state));
            console.log(initialState);
            Object.assign(state,initialState) // updating the redux state
            console.log(state);
            let userInfo = action.payload
            userInfo = {...userInfo,react: initialState}
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            
            // console.log(localStorage.getItem("react"));
            // console.log(state);
            // localStorage.setItem("react",JSON.stringify(state))
        },
        addLevelReact: (state, action) => {
            let levels = state?.level

            levels?.push(action.payload[0])
            localStorage.setItem("react", JSON.stringify(state))
        },
        addExerciseReact: (state, action) => {
            const {newExercise} = action.payload;
            console.log(newExercise[0]);
            console.log(current(state));
            let levels = state.level
            console.log(levels);
            let {ex: excercises} = levels[(levels?.length) - 1]
            excercises?.push(newExercise[0])
            localStorage.setItem("react", JSON.stringify(state))
        },
        updateExerciseReact: (state, action) =>{
            const {exerciseScore,exercisePassScore, levelsLength, exercisesLength} = action.payload
            
            let levels = state.level

            let {ex: excercises, levelScore} = levels[levels.length - 1]

            levelScore+=exerciseScore
            let passScore = 0   
            passScore = exercisePassScore*exercisesLength
            // console.log("Pass score: ",passScore);
            // console.log("level score",levelScore);
            // console.log("Have you passed?", levelScore >=passScore);
            let levelStatusValue = ''
            let isCompletedValue = false

            if( levelScore >= passScore)
            {
                levelStatusValue = "passed"
                isCompletedValue = true
            }
            else{
                levelStatusValue = "not passed"
                isCompletedValue = false
            }

            state.overallScore+=exerciseScore
            state.progress = levelScore >= passScore ? levels.length : state.progress

            levels[levels.length - 1] = {
            ...levels[levels.length - 1],
            levelScore: levelScore,
            levelStatus: levelStatusValue,
            isCompleted: isCompletedValue
            }

            // {console.log(newLevel)}
            // levels[levels.length - 1] = newLevel
           
           
         
            let currentExercise = excercises[excercises?.length-1]
            let updateExercise = 
            {...currentExercise,
            exerciseScore: exerciseScore,
            exerciseStatus: (exerciseScore >= exercisePassScore) ? "passed" : "not passed"
            }
           
            excercises[excercises.length-1] = updateExercise

            localStorage.setItem("react", JSON.stringify(state))
        }
    }
})

export const {resumeQuizReact, resetQuizReact, addExerciseReact, addLevelReact, updateExerciseReact} = reactSlice.actions

export default reactSlice.reducer