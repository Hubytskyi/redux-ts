import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../interfaces/post.interface';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  tagTypes: ['Post'],
  endpoints: (builder => ({
    fetchAllPosts: builder.query<Post[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Post']
    }),
    createPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post']
    })
  }))
})