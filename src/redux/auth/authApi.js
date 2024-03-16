import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://estimate-app-backend.onrender.com/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    current: builder.query({
      query: () => `/current`,
      providesTags: ['User'],
    }),
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    addAllow: builder.mutation({
      query: ({id, newData }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['User'],
    }),
    deleteAllow: builder.mutation({
      query: ({id, newData }) => ({
        url: `/delete/${id}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCurrentQuery, useLoginMutation, useSignupMutation, useAddAllowMutation, useDeleteAllowMutation, useLogoutMutation } =
  authApi;