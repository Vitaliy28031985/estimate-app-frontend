import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const materialApi = createApi({
  reducerPath: 'materialApi',
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
  tagTypes: ['Material'],
  endpoints: builder => ({
    addMaterial: builder.mutation({
      query: ({id, materials}) => ({
        url: `materials/${id}`,
        method: 'POST',
        body: materials,
      }),
  
      invalidatesTags: ['Material'],
    }) ,
    updateMaterial: builder.mutation({
     
      query: ([projId, matId, newData ]) => ({
        url: `materials/${projId}/${matId}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['Material'],
    }),
     deleteMaterial: builder.mutation({
       query: param => ({
         url: `materials/${param.idPro}/${param.idMat}`,
         method: 'DELETE',
       }),
       invalidatesTags: ['Material'],
     }),


  }),
});

export const {
  useAddMaterialMutation,
  useUpdateMaterialMutation,
  useDeleteMaterialMutation

} = materialApi;