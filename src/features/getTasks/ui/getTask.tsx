'use client'

import { useGetAllTasksQuery } from "@/shared/api/TrelloApi"
import { RootState } from "@/shared/lib/redux/store"
import { useSelector } from "react-redux"

const GetTask = () => {
    const Task = useSelector((state: RootState) => state)
    const {data,error,isLoading,isFetching,currentData} = useGetAllTasksQuery('');
    console.log(Task)
  return (
    <div>GetTask</div>
  )
}

export default GetTask