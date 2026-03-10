import HabitList from '../components/HabitList'
import AddHabit from '../components/AddHabit'

function Home({ habits, onAddHabit, onToggleHabit, onDeleteHabit }) {
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
          <AddHabit onAddHabit={onAddHabit} />
          <HabitList
            habits={habits}
            onToggleHabit={onToggleHabit}
            onDeleteHabit={onDeleteHabit}
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
