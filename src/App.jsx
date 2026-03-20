import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'
import * as storage from './utils/storage'

function getTodayKey() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

function normalizeHabit(habit) {
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

  const [habits, setHabits] = useState(() => {
    const saved = storage.loadHabits()
    const source = saved && saved.length ? saved : defaultHabits
    return source.map(normalizeHabit)
  })

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
          delete completions[today]
        } else {
          completions[today] = true
        }
        return { ...habit, completions }
      })
    )
  }

  const editHabit = (id, newName) => {
    setHabits((prev) => {
      const next = prev.map((h) => (h.id === id ? { ...h, name: newName } : h))
      storage.saveHabits(next)
      return next
    })
  }

  const deleteHabit = (id) => {
    const ok = window.confirm('Delete this habit? This cannot be undone.')
    if (!ok) return
    setHabits((prev) => {
      const next = prev.filter((habit) => habit.id !== id)
      storage.saveHabits(next)
      return next
    })
  }

  return (
    <Home
      habits={habits}
      onAddHabit={addHabit}
      onToggleHabit={toggleHabit}
      onDeleteHabit={deleteHabit}
      onEditHabit={editHabit}
    />
  )
}

export default App