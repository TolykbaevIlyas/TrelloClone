'use client'
import { Tasks } from '@/widgets/Tasks'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [boards, setBoards] = useState([
    {id: 1, title:"Сделать",items:[{id:1,title:'ГО'},{id:2,title:'ТУда'},{id:3,title:'С'}]},
    {id: 2, title:"Проверить",items:[{id:4,title:'ГОff'},{id:5,title:'ТУ'},{id:6,title:'Сf'}]},
    {id: 3, title:"Сделано",items:[{id:7,title:'ГОgg'},{id:8,title:'Тда'},{id:9,title:'aС'}]},
  ])
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      {boards.map(board => 
        <div className='border-2 rounded-lg w-44 min-h-72 text-center'>
          <div className='border-b-2'>{board.title}</div>
          {board.items.map(item => 
            <div 
                onDragOver={(e)=> dragOverHandler(e,board,item)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={(e)=> dragStartHandler(e)}
                onDragEnd={(e)=> DragEndHandler(e)}
                onDrop={(e)=> drapHandler(e,board,item)}
                className='cursor-grab m-2 p-2 border-2 rounded-xl' 
                draggable={true} >
              {item.title}
            </div>)}
        </div>)}
      {/* <Tasks/> */}
    </main>
  )
}
