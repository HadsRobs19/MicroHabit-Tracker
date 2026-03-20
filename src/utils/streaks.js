export function formatDateKey(date) {
  return date.toISOString().slice(0, 10)
}

export function getLastNDates(n, endDate = new Date()) {
  const days = []
  const d = new Date(endDate)
  // produce array oldest -> newest
  for (let i = n - 1; i >= 0; i--) {
    const dt = new Date(d)
    dt.setDate(d.getDate() - i)
    days.push(formatDateKey(dt))
  }
  return days
}

// completions: { '2026-03-20': true, ... }
export function mapCompletionsForDates(completions = {}, dates = []) {
  return dates.map((day) => Boolean(completions && completions[day]))
}

// current streak counts consecutive completed days ending today
export function computeCurrentStreak(completions = {}, todayKey = formatDateKey(new Date())) {
  let streak = 0
  const today = new Date(todayKey)
  let cursor = new Date(today)

  // count backwards until a day is not completed
  while (true) {
    const key = formatDateKey(cursor)
    if (completions && completions[key]) {
      streak += 1
      cursor.setDate(cursor.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}