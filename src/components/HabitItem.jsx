// ...existing code...
function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <li className={`habit-item ${habit.completed ? 'completed' : ''}`}>
      <label className="habit-label">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle && onToggle(habit.id)}
          className="habit-checkbox"
        />
        <span className="habit-name">{habit.name}</span>
      </label>
      <button
        onClick={() => onDelete && onDelete(habit.id)}
        className="habit-delete"
        aria-label="Delete habit"
      >
        Delete
      </button>
    </li>
  )
}

export default HabitItem
