import { useState } from 'react';
import './App.css'

import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import Column from './components/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

function App() {

  const [tasks, setTasks] = useState([
    { id: 'bahfsdgrhagr', title: "Add tests to homepage" },
    { id: 'fasdnfahsdf', title: "Fix styling in about section" },
    { id: 'andfausd7as', title: "Learn how to center a div" },
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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <>
      <div className='App'>
        <h1> My Tasks</h1>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks}/>
        </DndContext>
      </div>
    </>
  )
}

export default App
