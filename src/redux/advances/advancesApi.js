import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advanceApi = createApi({
  reducerPath: 'advanceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://estimate-app-backend.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Advance'],
  endpoints: builder => ({
    addAdvance: builder.mutation({
      query: ({id, advances}) => ({
        url: `advances/${id}`,
        method: 'POST',
        body: advances,
      }),
  
      invalidatesTags: ['Advance'],
    }) ,
    updateAdvance: builder.mutation({
     
      query: ([projId, advId, newData ]) => ({
        url: `advances/${projId}/${advId}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['Advance'],
    }),
     deleteAdvance: builder.mutation({
       query: param => ({
         url: `advances/${param.idPro}/${param.idAdv}`,
         method: 'DELETE',
       }),
       invalidatesTags: ['Advance'],
     }),


  }),
});

export const {
  useAddAdvanceMutation,
  useUpdateAdvanceMutation,
  useDeleteAdvanceMutation

} = advanceApi;