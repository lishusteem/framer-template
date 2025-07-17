# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Start development server (usually localhost:5173-5175)
npm run dev

# Build for production
npm run build

# Preview production build  
npm run preview

# Lint code
npm run lint

# Run tests
npm run test

# Run tests once
npm run test:run

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Single Test Execution
```bash
# Run specific test file
npm run test -- path/to/test.file.test.tsx

# Run tests matching pattern
npm run test -- --grep "pattern"
```

## Architecture Overview

This is an educational slide framework built with **Vite + React + TypeScript** for creating interactive, animated educational presentations. The codebase has complex architecture challenges documented in `CURRENT_ARCHITECTURE.md`.

### Core Structure
- **Framework Layer**: `src/framework/` - Reusable presentation components and utilities
- **Presentation Layer**: `src/presentation/` - Application-specific presentation management  
- **Application Layer**: `src/` - Main app entry points and contexts

### Key Architectural Challenges
⚠️ **CRITICAL**: The codebase currently has dual animation systems (duration-based carousel + precise timing) that operate independently and can drift out of sync. Any animation changes require careful consideration of both systems.

### Main Components

#### Framework Components (`src/framework/`)
- **EducationalTemplate**: Main slide template with 4-column responsive layout
- **MainContent**: Central content area with carousel system (520 lines - very complex)
- **VocabularySection**: Left sidebar for vocabulary terms
- **ConceptsSection**: Right sidebar for concept explanations

#### Presentation System (`src/presentation/`)
- **PresentationView**: Main app component with editor interface
- **PresentationContext**: State management for slide data
- **NavigationContext**: Slide navigation and progression state
- **CanvasArea**: Exportable slide display area

### Animation Systems (⚠️ DUAL SYSTEM WARNING)

#### System A: Duration-Based Carousel (`carouselSystem.ts`)
- Fixed intervals (3-5 seconds)
- Drives main content progression
- Used by MainContent component

#### System B: Precise Timing (`timingSystem.ts`) 
- Millisecond precision with startTime/duration
- Drives sidebar highlights and animations
- Used by VocabularySection and ConceptsSection

**IMPORTANT**: Changes to animations may require updating both systems to maintain synchronization.

### Theme System
5 built-in themes in `themeSystem.ts`:
- `dark-blue` - Professional blockchain theme
- `purple-cosmic` - Cosmic technology theme  
- `green-nature` - Natural, organic theme
- `orange-energy` - High-energy, dynamic theme
- `minimal-light` - Clean, minimal theme

### Testing Setup
- **Framework**: Vitest with jsdom environment
- **Setup File**: `tests/setup.ts`
- **Timeout**: 10 seconds (extended for animation tests)
- **Test Location**: `tests/` directory with pattern `**/*.{test,spec}.{js,ts,jsx,tsx}`

### Content Configuration
Slide content is configured via TypeScript objects in `src/slides/configs/`:
- Define vocabulary terms, concepts, timing, and animations
- Example configurations: `blockchain-intro.config.ts`, `sample-presentation.config.ts`

### State Management
Multiple state sources (documented complexity issue):
- App-level: View mode, timing toggles
- Carousel state: Current slide, progress, transitions  
- Timing state: Element-specific animation highlights
- Component state: Hover states in sections

### Development Notes

#### Before Making Changes
1. Review `CURRENT_ARCHITECTURE.md` for complexity warnings
2. Understand both animation systems if modifying animations
3. Check test coverage for affected components
4. Consider impact on both framework and presentation layers

#### Common Pitfalls
- **Animation Drift**: Modifying one animation system without updating the other
- **State Synchronization**: Changes affecting multiple state contexts
- **Component Dependencies**: High coupling between sections and utilities
- **Type Dependencies**: Changes to `slide.types.ts` affect multiple files

#### File Modification Impact
- **MainContent.tsx** (520 lines): Central component affecting carousel and timing
- **timingSystem.ts**: Used by 3+ components for animations
- **slide.types.ts**: Referenced by 6+ files for type definitions

### Framework vs Application Code
- **Framework** (`src/framework/`): Intended to be reusable/immutable
- **Application** (`src/presentation/` + `src/`): App-specific implementation
- **Slide Configs** (`src/slides/`): Content definitions

Current ratio is 3:1 framework-to-application files, indicating potential over-engineering.