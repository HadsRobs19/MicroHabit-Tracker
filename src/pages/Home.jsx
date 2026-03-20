import HabitList from '../components/HabitList'
import AddHabit from '../components/AddHabit'
import DailyProgress from '../components/DailyProgress'

function Home({ habits, onAddHabit, onToggleHabit, onDeleteHabit, onEditHabit }) {
  return (
    <div className="home">
      <header className="hero">
        <h1 className="app-title">MicroHabit</h1>
        <p className="app-description">
          MicroHabit helps you build better routines by tracking small daily habits.
        </p>
      </header>

      <main className="main-content">
        <section className="habits-section">
          <h2>Your Daily Habits</h2>

          {/* Daily progress summary with spacing below */}
          <div style={{ marginBottom: 16 }}>
            <DailyProgress habits={habits} />
          </div>

          {/* Add habit form */}
          <AddHabit onAddHabit={onAddHabit} />

          {/* Habit list */}
          <HabitList
            habits={habits}
            onToggleHabit={onToggleHabit}
            onDeleteHabit={onDeleteHabit}
            onEditHabit={onEditHabit}
          />
        </section>
      </main>

      <footer className="footer">
        <p>Start small. Stay consistent. Build better habits.</p>
      </footer>
    </div>
  )
}

export default Home