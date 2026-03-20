import { formatDateKey } from '../utils/streaks'

export default function DailyProgress({ habits = [] }) {
  const todayKey = formatDateKey(new Date())
  const total = habits.length
  const completed = habits.reduce(
    (acc, h) => acc + (h.completions && h.completions[todayKey] ? 1 : 0),
    0
  )
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="daily-progress" aria-hidden={total === 0}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Today's progress</div>
        <div style={{ fontSize: 13, color: '#555' }}>{completed}/{total} • {percent}%</div>
      </div>

      <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percent}
        style={{ width: '100%', height: 10, background: '#e9e9ef', borderRadius: 6, overflow: 'hidden' }}
      >
        <div
          style={{ width: `${percent}%`, height: '100%', background: '#667eea', transition: 'width 220ms ease' }}
        />
      </div>
    </div>
  )
}