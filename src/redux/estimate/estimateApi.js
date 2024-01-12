// // estimateApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const estimateApi = createApi({
  reducerPath: 'estimateApi',
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
  tagTypes: ['Estimate'],
  endpoints: builder => ({
    addEstimate: builder.mutation({
      query: param => ({
        url: `estimates/${param.id}`,
        method: 'POST',
        body: param,
      }),
  
      invalidatesTags: ['Estimate'],
    }) ,
    deleteEstimate: builder.mutation({
        query: param => ({
          url: `estimates/${param.idPro}/${param.idEst}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Estimate'],
      }),

  }),
});

export const {
  useAddEstimateMutation,
  useDeleteEstimateMutation
} = estimateApi;


  // // query: param =>{ 
    //     console.log(param.estimates)

    //     ({
    //     url: `estimates/${param.id}`,
    //     method: 'POST',
    //     body: param.estimates,
    //   })
    //   console.log()
    // },
    // query: param => ({
    //     url: `estimates/65902ece8d13de584b47ef2e`,
    //     method: 'POST',
    //     body: param.estimates,
    //   }),