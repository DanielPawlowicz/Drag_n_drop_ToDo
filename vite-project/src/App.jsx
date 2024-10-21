import { useState } from 'react';
import './App.css'

import { DndContext, closestCorners } from '@dnd-kit/core'
import Column from './components/Column';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  return (
    <>
      <div className='App'>
        <h1> My Tasks</h1>
        <DndContext collisionDetection={closestCorners}>
          <Column tasks={tasks}/>
        </DndContext>
      </div>
    </>
  )
}

export default App
