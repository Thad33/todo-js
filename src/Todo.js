import React from 'react'

 function Todo() {
  const [todo = setTodo] = setState([
    {
      id: 3,
      title: "Basketball",
      description: "Am hooping all day",
      status: "Pending"
    },
    {
      id: 3,
      title: "Coding ",
      description: "Coding For Life",
      status: "Pending"
    }
  ])}
  return (
    <>
    <div className='con-todo'>
      <h3>Welcome</h3>
      <h3>Add</h3>
    </div>
    <div className="todoList">
      {todo.map((item)=>{
        return(
          <div></div>
        )
      })}
    </div>
    </>
  )


export default Todo