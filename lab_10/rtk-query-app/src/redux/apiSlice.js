import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://students.misha999777.workers.dev',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'dima7777_test_api');
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/',
      providesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = api;
