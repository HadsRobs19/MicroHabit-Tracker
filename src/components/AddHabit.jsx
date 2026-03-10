import { useState } from 'react'

function AddHabit({ onAddHabit }) {
  const [habitName, setHabitName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (habitName.trim()) {
      onAddHabit(habitName.trim())
      setHabitName('')
    }
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
