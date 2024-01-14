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

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e:any){
    e.preventDefault();
  }
  function dragLeaveHandler(e:any){
    
  }
  function dragStartHandler(e:any,board:any,item:any){
    setCurrentBoard(board);
    setCurrentItem(item)
  }
  function dragEndHandler(e:any){
    
  }
  function drapHandler(e:any,board:any,item:any){
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex,1)
    console.log("hello")
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex + 1, 0, currentItem)

    setBoards(boards.map(b => {
      if(b.id === board.id){
        return board
      }
      if(b.id === currentBoard.id){
        return currentBoard
      }
      return 0
    }))
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      {boards.map(board => 
        <div className='border-2 rounded-lg w-44 min-h-72 text-center'>
          <div className='border-b-2'>{board.title}</div>
          {board.items.map(item => 
            <div 
                onDragOver={(e)=> dragOverHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={(e)=> dragStartHandler(e,board,item)}
                onDragEnd={(e)=> dragEndHandler(e)}
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
