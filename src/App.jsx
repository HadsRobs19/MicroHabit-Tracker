import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'
import * as storage from './utils/storage'

function getTodayKey() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

function normalizeHabit(habit) {
  // migrate older boolean `completed` -> completions map (marking today if true)
  if (habit && typeof habit.completions === 'object') return habit
  const completions = {}
  if (habit && 'completed' in habit && habit.completed) {
    completions[getTodayKey()] = true
  }
  return { ...habit, completions }
}

function App() {
  const defaultHabits = [
    { id: 1, name: 'Drink water', completions: {} },
    { id: 2, name: 'Read for 10 minutes', completions: {} },
    { id: 3, name: 'Take a short walk', completions: {} },
  ]

  // lazy init from storage, fallback to defaults, normalize shape
  const [habits, setHabits] = useState(() => {
    const saved = storage.loadHabits()
    const source = saved && saved.length ? saved : defaultHabits
    return source.map(normalizeHabit)
  })

  // persist whenever habits change
  useEffect(() => {
    storage.saveHabits(habits)
  }, [habits])

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completions: {},
    }
    setHabits((prev) => [...prev, newHabit])
  }

  const toggleHabit = (id) => {
    const today = getTodayKey()
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit
        const completions = { ...(habit.completions || {}) }
        if (completions[today]) {
          // unmark today
          delete completions[today]
        } else {
          // mark today complete
          completions[today] = true
        }
        return { ...habit, completions }
      })
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