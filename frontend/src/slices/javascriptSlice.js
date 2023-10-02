import { createSlice} from "@reduxjs/toolkit";

// localStorage.getItem("javascript") ? JSON.parse(localStorage.getItem("javascript")) :
const initialState =  localStorage.getItem("javascript") ? JSON.parse(localStorage.getItem("javascript")) :
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
    


const javascriptSlice = createSlice({
    name: "javascript",
    initialState,
    reducers: {
        resumeQuizJs: (state, action) => {
            const {javascript} = action.payload.userInfo
            state.progress = javascript.progress
            state.overallScore = javascript.overallScore
            state.level = javascript.level

            localStorage.setItem("javascript", JSON.stringify(state))
        },
        resetQuizJs: (state,action) => {
            localStorage.removeItem("javascript")
            Object.assign(state,initialState)
            let userInfo = action.payload
            userInfo = {...userInfo,javascript: initialState}
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        },
        addLevelJs: (state, action) => {
            let levels = state?.level

            levels?.push(action.payload[0])
            localStorage.setItem("javascript", JSON.stringify(state))
        },
        addExerciseJs: (state, action) => {
            const {newExercise} = action.payload;
            let levels = state.level
            let {ex: excercises} = levels[(levels?.length) - 1]
            excercises?.push(newExercise[0])
            localStorage.setItem("javascript", JSON.stringify(state))
        },
        updateExerciseJs: (state, action) =>{
            const {exerciseScore,exercisePassScore, exercisesLength} = action.payload
            
            let levels = state.level

            let {ex: excercises, levelScore} = levels[levels.length - 1]

            levelScore+=exerciseScore
            let passScore = 0   
            passScore = exercisePassScore*exercisesLength
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

        
         
            let currentExercise = excercises[excercises?.length-1]
            let updateExercise = 
            {...currentExercise,
            exerciseScore: exerciseScore,
            exerciseStatus: (exerciseScore >= exercisePassScore) ? "passed" : "not passed"
            }
           
            excercises[excercises.length-1] = updateExercise

            localStorage.setItem("javascript", JSON.stringify(state))
        
        }
    }
})

export const {resumeQuizJs, resetQuizJs, addExerciseJs, addLevelJs,updateExerciseJs} = javascriptSlice.actions

export default javascriptSlice.reducer