import { useState } from 'react'

function AddHabit({ onAddHabit, onAdd }) {
  const [habitName, setHabitName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = habitName.trim()
    if (!name) return

    const addFn = onAddHabit ?? onAdd
    if (typeof addFn === 'function') {
      addFn(name)
    } else {
      // safety: if no handler provided, log to console for debugging
      // (won't affect styling)
      console.warn('AddHabit: no add handler provided')
    }

    setHabitName('')
  }

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a new micro habit..."
        className="add-habit-input"
      />
      <button type="submit" className="add-habit-button">
        Add Habit
      </button>
    </form>
  )
}

export default AddHabit