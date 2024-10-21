import React from 'react'
import './Column.css'

const Column = ({tasks}) => {
  return (
    <div className='column'>
        {tasks.map((task) => (<div key={task.id}>{task.title}</div>))}
    </div>
  )
}

export default Column