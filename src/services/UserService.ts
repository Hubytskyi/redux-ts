import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../interfaces/user.interface';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  tagTypes: ['User'],
  endpoints: (builder => ({
    fetchAllUsers: builder.query<User[], number>({
      query: (limit: number = 5) => ({
        url: '/users',
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['User']
    }),
  }))
})