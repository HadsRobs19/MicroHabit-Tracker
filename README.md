# MicroHabit

MicroHabit helps you build better routines by tracking small, daily micro-habits. Create custom habits, mark them complete each day, and monitor short-term progress with a compact 7-day view and streak counter. Data is stored locally so your habits and daily completions persist across refreshes.

## Features
- Add custom micro-habits (create)
- Daily tracking with a checkbox per habit (update)
- Per-habit 7-day visualization and current streak
- Overall daily progress summary (count + progress bar)
- Inline edit and delete habit (edit, delete)
- Responsive layout (desktop, tablet, mobile)
- Local data persistence using localStorage

## Technologies
- React 18 (functional components + hooks)
- Vite (dev server & build)
- CSS3 for styling and responsive rules
- Plain browser localStorage for persistence (no backend)

## Setup / Run locally
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/microhabit.git
   cd microhabit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open: http://localhost:5173

Build for production:
```bash
npm run build
```
Preview production build:
```bash
npm run preview
```

## Data persistence details
- All habits and daily completions are saved in localStorage under the key: `microhabits_v1`
- Habit shape example:
  ```json
  {
    "id": 1679680000000,
    "name": "Drink water",
    "completions": { "2026-03-23": true, "2026-03-22": true }
  }
  ```

## Known bugs / limitations
- Data is stored only in the current browser and device (localStorage); no sync across devices.
- Manual edits to older dates require editing localStorage (no calendar editor yet).
- Very long habit names are clamped to two lines; extremely long text may still truncate on very small screens.
- No user authentication or backup/export feature yet.

## What I learned
Working on MicroHabit reinforced the value of small, testable features: adding persistence early prevents lost work and simplifies later features. Building the 7-day visualization taught me careful data-shape design and clean migration for older data shapes. Implementing responsive layouts highlighted the trade-offs between readability and compactness on mobile and tablet views. The project improved my ability to iterate quickly while keeping state and UI predictable.

## Deployment
- Deploy the built `dist` folder to Netlify.
- Set the build command to `npm run build` and publish the `dist` directory.