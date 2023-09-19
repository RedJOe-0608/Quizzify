//Parent to the rest of the slices we are going to create.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {BASE_URL} from '../constants'

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Quiz', 'User'],
    endpoints: (builder) => ({}) 
})