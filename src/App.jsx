
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'
import * as storage from './utils/storage'

function App() {
  const defaultHabits = [
    { id: 1, name: 'Drink water', completed: false },
    { id: 2, name: 'Read for 10 minutes', completed: false },
    { id: 3, name: 'Take a short walk', completed: false },
  ]

  // lazy init from storage, fallback to defaults
  const [habits, setHabits] = useState(() => {
    const saved = storage.loadHabits()
    return saved && saved.length ? saved : defaultHabits
  })

  // persist whenever habits change
  useEffect(() => {
    storage.saveHabits(habits)
  }, [habits])

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
    }
    setHabits((prev) => [...prev, newHabit])
  }

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
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