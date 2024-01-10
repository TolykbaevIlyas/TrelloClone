'use client'

import { RootState } from "@/shared/lib/redux/store"
import { useSelector } from "react-redux"

const GetTask = () => {
    const Task = useSelector((state: RootState) => state)
    console.log(Task)
  return (
    <div>GetTask</div>
  )
}

export default GetTask