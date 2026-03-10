import { useState } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Drink water', completed: false },
    { id: 2, name: 'Read for 10 minutes', completed: false },
    { id: 3, name: 'Take a short walk', completed: false },
  ])

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
    }
    setHabits([...habits, newHabit])
  }

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <Home
      habits={habits}
      onAddHabit={addHabit}
      onToggleHabit={toggleHabit}
      onDeleteHabit={deleteHabit}
    />
  )
}

export default App
