import { useState, useEffect } from 'react'
import { getLastNDates, mapCompletionsForDates, computeCurrentStreak, formatDateKey } from '../utils/streaks'

function HabitItem({ habit, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState(habit.name)

  useEffect(() => {
    setEditName(habit.name)
  }, [habit.name])

  const todayKey = formatDateKey(new Date())
  const completedToday = Boolean(habit.completions && habit.completions[todayKey])

  // 7-day calendar (oldest -> newest)
  const last7 = getLastNDates(7)
  const last7Status = mapCompletionsForDates(habit.completions || {}, last7)
  const currentStreak = computeCurrentStreak(habit.completions || {}, todayKey)

  function startEdit() {
    setEditName(habit.name)
    setEditing(true)
  }

  function cancelEdit() {
    setEditName(habit.name)
    setEditing(false)
  }

  function saveEdit() {
    const trimmed = editName.trim()
    if (!trimmed) {
      // if empty, revert
      cancelEdit()
      return
    }
    if (typeof onEdit === 'function') {
      onEdit(habit.id, trimmed)
    }
    setEditing(false)
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <li className={`habit-item ${completedToday ? 'completed' : ''}`}>
      <label className="habit-label">
        <input
          type="checkbox"
          checked={completedToday}
          onChange={() => onToggle && onToggle(habit.id)}
          className="habit-checkbox"
        />

        {editing ? (
          <input
            className="add-habit-input"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={onKeyDown}
            onBlur={saveEdit}
            autoFocus
          />
        ) : (
          <span
            className="habit-name"
            onDoubleClick={startEdit}
            title="Double-click to edit"
          >
            {habit.name}
          </span>
        )}
      </label>

      <div
        className="habit-meta"
        aria-hidden="false"
        style={{ marginRight: 12 }}
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

      {/* Edit and Delete controls */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {!editing && (
          <button
            onClick={startEdit}
            className="habit-edit"
            aria-label="Edit habit"
            title="Edit"
            type="button"
          >
            Edit
          </button>
        )}

        {editing && (
          <button
            onClick={cancelEdit}
            className="habit-cancel"
            aria-label="Cancel edit"
            title="Cancel edit"
            type="button"
          >
            ×
          </button>
        )}

        <button
          onClick={() => onDelete && onDelete(habit.id)}
          className="habit-delete"
          aria-label="Delete habit"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default HabitItem
