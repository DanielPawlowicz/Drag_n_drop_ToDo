import { useState } from 'react';
import './App.css'

import { DndContext, closestCorners } from '@dnd-kit/core'
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const getTaskPos = id => tasks.findIndex(task => task.id === id)

  const handleDragEnd = event => {
    const {active, over} = event

    if(active.id === over.id) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <>
      <div className='App'>
        <h1> My Tasks</h1>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks}/>
        </DndContext>
      </div>
    </>
  )
}

export default App
