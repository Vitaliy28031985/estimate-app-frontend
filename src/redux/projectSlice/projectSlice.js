import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
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
    tagTypes: ['Project'],
    endpoints: builder => ({
      getProjects: builder.query({
        query: () => `projects`,
        providesTags: ['Project'],
      }),
      getProjectById: builder.query({
        query: id => `projects/${id}`, 
        providesTags: (result, error, id) => [{ type: 'Project', id }],
      }),
      addProjects: builder.mutation({
        query: newProjects => ({
          url: `projects`,
          method: 'POST',
          body: newProjects,
        }),
        invalidatesTags: ['Project'],
      }),
      deleteProject: builder.mutation({
        query: id => ({
          url: `projects/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Project'],
      }),
     
    }),
  });

  export const {
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useAddProjectsMutation,
    useDeleteProjectMutation,
  } = projectsApi;

  