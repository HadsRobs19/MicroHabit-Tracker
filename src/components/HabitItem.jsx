import { getLastNDates, mapCompletionsForDates, computeCurrentStreak, formatDateKey } from '../utils/streaks'

function HabitItem({ habit, onToggle, onDelete }) {

  const todayKey = formatDateKey(new Date())
  const completedToday = Boolean(habit.completions && habit.completions[todayKey])

  // 7-day calendar (oldest -> newest)
  const last7 = getLastNDates(7)
  const last7Status = mapCompletionsForDates(habit.completions || {}, last7)
  const currentStreak = computeCurrentStreak(habit.completions || {}, todayKey)

  return (
    <li className={`habit-item ${completedToday ? 'completed' : ''}`}>
      <label className="habit-label">
        <input
          type="checkbox"
          checked={completedToday}
          onChange={() => onToggle && onToggle(habit.id)}
          className="habit-checkbox"
        />
        <span className="habit-name">{habit.name}</span>
      </label>

      <div
        className="habit-meta"
        aria-hidden="false"
        style={{ marginRight: 12 }} // added spacing before the delete button
      >
        <div className="habit-streak" title={`Current streak: ${currentStreak} day(s)`}>
          {currentStreak}d
        </div>

        <div className="habit-calendar" role="list" aria-label="7 day completion">
          {last7.map((day, idx) => {
            const done = last7Status[idx]
            return (
              <span
                key={day}
                role="listitem"
                aria-label={`${day} ${done ? 'completed' : 'not completed'}`}
                className={`habit-day ${done ? 'done' : 'miss'}`}
                title={day}
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  marginLeft: idx === 0 ? 0 : 6,
                  backgroundColor: done ? '#667eea' : '#e6e6e6'
                }}
              />
            )
          })}
        </div>
      </div>

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