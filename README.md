# MicroHabit

MicroHabit helps you build better routines by tracking small daily habits. Start with tiny, manageable habits and watch them compound into lasting positive changes.

## Features

- **Add Custom Habits** - Create personalized micro habits tailored to your goals
- **Daily Tracking** - Mark habits as complete with a simple checkbox interface
- **Progress Visualization** - See your daily progress at a glance
- **Habit Management** - Easily add, edit, or remove habits as your routine evolves
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with gradients and responsive design
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/microhabit.git
   cd microhabit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy

## Project Structure

```
microhabit/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AddHabit.jsx
│   │   ├── HabitItem.jsx
│   │   └── HabitList.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
