'use client'
import { TaskBlock } from '@/entities/TaskBlock';
import { GetTask } from '@/features/getTasks'
import { useGetAllTasksQuery } from '@/shared/api/TrelloApi';
import React from 'react'

const Tasks = () => {
  const {data,error,isLoading,isFetching,currentData} = useGetAllTasksQuery('');
  console.log(data)
  return (
    <div>
      <p>Tasks</p>
      {error ? <span>Error</span> 
      : isLoading ? <span>ISLoading</span>
      : data ?  data.map((task: any)=><TaskBlock key={task.id} title={task.title}/>)
      : null}
    </div>
  )
}

export default Tasks