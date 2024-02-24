import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const positionApi = createApi({
  reducerPath: 'positionApi',
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
  tagTypes: ['Position'],
  endpoints: builder => ({
    addPosition: builder.mutation({
      query: param => ({
        url: `position/${param.idEst}/${param.idPos}`,
        method: 'POST',
        body: param,
      }),
  
      invalidatesTags: ['Position'],
    }) ,
    updatePosition: builder.mutation({
     
      query: ([prjId, estId, posId, newData ]) => ({
        url: `position/${prjId}/${estId}/${posId}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['Position'],
    }),
    deletePosition: builder.mutation({
      query: param => ({
        url: `position/${param.idPro}/${param.idEst}/${param.idPos}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Position'],
    }),


  }),
});

export const {
  useAddPositionMutation,
  useUpdatePositionMutation,
  useDeletePositionMutation

} = positionApi;