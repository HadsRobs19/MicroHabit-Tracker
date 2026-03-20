
const STORAGE_KEY = 'microhabits_v1'

export function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch (err) {
    console.error('Failed to load habits from localStorage', err)
    return []
  }
}

export function saveHabits(habits) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
    return true
  } catch (err) {
    console.error('Failed to save habits to localStorage', err)
    return false
  }
}

export function addHabit(habit) {
  const habits = loadHabits()
  habits.push(habit)
  saveHabits(habits)
  return habits
}

export function updateHabit(id, changes) {
  const habits = loadHabits()
  const idx = habits.findIndex((h) => h.id === id)
  if (idx === -1) return null
  habits[idx] = { ...habits[idx], ...changes }
  saveHabits(habits)
  return habits[idx]
}

export function removeHabit(id) {
  let habits = loadHabits()
  habits = habits.filter((h) => h.id !== id)
  saveHabits(habits)
  return habits
}

export function getHabit(id) {
  const habits = loadHabits()
  return habits.find((h) => h.id === id) || null
}