# Doruk.wtf - Personal Website

Welcome to the repository for my personal website, [doruk.wtf](https://doruk.wtf).

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v7
- **Animations**: Motion (formerly Framer Motion)
- **Creative Canvas**: P5.js with react-p5
- **Code Quality**: ESLint, Prettier

## Features

- Interactive P5.js background scene that responds to mouse proximity
- Context-based state management for window dimensions and mouse position
- Smooth page transitions with Motion animations
- Responsive design with TailwindCSS
- Custom navigation with route-based component rendering

## Project Structure

```
doruk.wtf/
├── src/                       # Source files
│   ├── components/            # Reusable components
│   ├── context/               # React context providers
│   │   ├── mouse-position/    # Mouse position tracking
│   │   ├── scene-state/       # P5.js scene state management
│   │   └── window-dimensions/ # Window size tracking
│   ├── layout/                # Layout components
│   ├── lib/                   # Library configurations
│   ├── pages/                 # Page components
│   ├── router/                # Routing configuration
│   └── utils/                 # Utility functions
├── public/                    # Static files
└── ...config files            # Configuration files for build tools
```

## Key Implementation Details

### Interactive P5.js Animation

The website features an interactive background animation created with P5.js that responds to user interaction. The main scene in `components/p5.tsx` includes:

- Dynamic waves that react to mouse proximity
- Fibonacci-inspired circular patterns
- Responsive canvas that adapts to window dimensions
- Custom noise-based animations

### Context-Based State Management

Multiple React contexts manage the application state:

- `WindowDimensionsContext`: Tracks and provides window dimensions
- `MousePositionContext`: Tracks and provides mouse coordinates
- `SceneStateContext`: Manages the P5.js scene state and proximity calculations

### Page Transitions

Smooth page transitions are implemented using Motion's `AnimatePresence` component, with custom variants and transition configurations defined in `lib/motion.ts`.

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
git clone https://github.com/dorukozerr/doruk.wtf.git &&
cd doruk.wtf &&
yarn &&
yarn dev
```

### Code Style

This project uses custom ESLint and Prettier configurations:

- Arrow functions are preferred over regular functions
- Single quotes are used for strings and JSX attributes
- Trailing commas are disabled
