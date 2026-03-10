import HabitItem from './HabitItem'

function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  if (habits.length === 0) {
    return (
      <div className="habit-list-empty">
        <p>No habits yet. Add your first micro habit above!</p>
      </div>
    )
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={() => onToggleHabit(habit.id)}
          onDelete={() => onDeleteHabit(habit.id)}
        />
      ))}
    </ul>
  )
}

export default HabitList
