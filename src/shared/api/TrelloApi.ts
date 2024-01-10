import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITaskApi } from "./types";

export const taskApi = createApi({
    reducerPath: 'taskApi',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
      getAllTasks: builder.query<ITaskApi | any , string>({
        query: () => `tasks`,
        providesTags: (result) => result
          ? [
              ...result.map(({ id }:any) => ({ type: 'Tasks' as const, id })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
      }),
      addTask: builder.mutation({
        query:(body)=>({
          url: 'tasks',
          method: 'POST',
          body,
        }),
        invalidatesTags: [{type: 'Tasks', id: 'LIST'}]
      }),
      updateTask: builder.mutation({
        query:({id, ...body})=> ({
          url: `tasks/${id}`,
          method: 'PATCH',
          body
        }),
        invalidatesTags:[{type: 'Tasks', id: 'LIST'}]
      }),
      deleteTask: builder.mutation({
        query:(id) => ({
          url: `tasks/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags:[{type: 'Tasks', id: 'LIST'}]
      })
    }),
  })

export default taskApi.reducer
export const { useGetAllTasksQuery,useAddTaskMutation,useUpdateTaskMutation,useDeleteTaskMutation } = taskApi;
