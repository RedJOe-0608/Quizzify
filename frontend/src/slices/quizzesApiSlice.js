import { QUIZZES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const quizzesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzes: builder.query({
            query: () => ({
                url: QUIZZES_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getSingleQuiz: builder.query({
            query: (quizId) => ({
                url: `${QUIZZES_URL}/${quizId}`
            }),
            keepUnusedDataFor: 5
        }),
        updateSingleQuiz: builder.mutation({
            query: (quizId, newLevel) => ({
                url: `${QUIZZES_URL}/${quizId}`,
                method: 'PUT',
                body: newLevel
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const {useGetQuizzesQuery, useGetSingleQuizQuery, useUpdateSingleQuizMutation} = quizzesApiSlice