# AI & ML Department Website

[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

## Table of Contents

- [Project Name](#ai--ml-department-website)
- [Description](#description)
- [Problem it Solves](#problem-it-solves)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Folder Structure](#folder-structure)
- [Installation Steps](#installation-steps)
- [Environment Variables](#environment-variables)
- [Usage Instructions](#usage-instructions)
- [API Endpoints](#api-endpoints)
- [Example Requests/Responses](#example-requestsresponses)
- [Screenshots or Demo](#screenshots-or-demo)
- [Testing Instructions](#testing-instructions)
- [Deployment Instructions](#deployment-instructions)
- [Future Improvements / Roadmap](#future-improvements--roadmap)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Description

A stunning, modern, and highly interactive website for the Artificial Intelligence & Machine Learning Department at GM University. This project showcases the department's programs, faculty, research, student life, and achievements through an engaging and visually appealing interface.

## Problem it Solves

The website serves as a centralized platform to:
- Provide detailed information about academic programs (B.Tech, M.Tech, Ph.D.)
- Showcase faculty profiles and research work
- Highlight student achievements and placement records
- Display campus events and student life activities
- Facilitate admissions inquiries and alumni connections
- Present the department's vision, mission, and learning resources

## Key Features

- **Unique Design**: Custom geometric shapes, morphing animations, and creative hover effects
- **Video Backgrounds**: Dynamic hero section and carousel with video content
- **Marquee Sections**: Smooth scrolling marquees for student activities and placement partners
- **CountUp Animations**: Animated statistics that trigger on scroll
- **Hidden Navbar**: Navbar appears after scrolling past hero section
- **Responsive Design**: Fully responsive across all devices (desktop, laptop, tablet, mobile)
- **Custom Animations**: Float, glow, morph, 3D transforms, and liquid effects
- **Interactive Elements**: Hover effects, transitions, and smooth scrolling
- **Video Gallery**: Dedicated section for department videos
- **Placement Statistics**: Dynamic countup animations for placement data

## Tech Stack

### Frontend
- **React 18**: UI library for building the user interface
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for complex animations
- **Lucide React**: Icon library
- **React Router DOM**: Client-side routing
- **React CountUp**: Animated counters
- **React Intersection Observer**: Scroll-based animations
- **Swiper**: Modern touch slider
- **React Slick**: Carousel component
- **FontAwesome**: Additional icon library

### Backend
- **Express.js**: Web framework for serving static files and handling routing

### Development Tools
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing

## Architecture Overview

The project follows a modern web architecture:

1. **Frontend (SPA)**: Built as a Single Page Application using React, with Vite as the build tool
2. **Styling**: Tailwind CSS for rapid UI development with custom animations and effects
3. **Routing**: Client-side routing handled by React Router
4. **Backend**: Simple Express server for serving built static files
5. **Asset Management**: All images, videos, and static assets bundled by Vite
6. **Responsive Design**: Mobile-first approach with breakpoints for all device sizes

## Folder Structure

```
aiml_website/
├── src/
│   ├── assets/           # Images, videos, and static files
│   │   ├── events/
│   │   ├── faculty/
│   │   ├── herosectionVideo-img/
│   │   ├── logo/
│   │   ├── sports/
│   │   └── student-event/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── HodMessage.jsx
│   │   ├── VisionMission.jsx
│   │   ├── Programs.jsx
│   │   ├── Faculty.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── StudentLife.jsx
│   │   ├── CampusEvents.jsx
│   │   ├── Achievements.jsx
│   │   ├── Placements.jsx
│   │   ├── PlacementPartners.jsx
│   │   ├── LearningResources.jsx
│   │   ├── Admissions.jsx
│   │   ├── Alumni.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public assets
├── dist/                 # Built files (generated)
├── server.js             # Express server
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd windsurf
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (default Vite port)

## Environment Variables

The application uses the following environment variables:

- `PORT`: Server port for production (default: 3000)

Create a `.env` file in the root directory if needed:

```env
PORT=3000
```

## Usage Instructions

### Development
```bash
npm run dev
```
Starts the Vite development server with hot reload.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Start Production Server
```bash
npm start
```
Starts the Express server to serve the built application.

## API Endpoints

This is a static website with no backend API endpoints. All content is client-side rendered.

## Example Requests/Responses

N/A - This is a static website with no API interactions.

## Screenshots or Demo

*Add screenshots or demo links here when available.*

## Testing Instructions

No specific testing framework is currently configured. For manual testing:

1. Run the development server: `npm run dev`
2. Test all sections and responsive behavior across different devices
3. Verify animations and interactions work correctly
4. Check video playback and carousel functionality

## Deployment Instructions

### Local Production Server
1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Access at `http://localhost:3000`

### Static Hosting (Netlify, Vercel, GitHub Pages)
- Deploy the `dist/` folder
- Add redirect rules for SPA routing:
  ```
  /*    /index.html   200
  ```

### Server Deployment (Apache/Nginx)
Configure your server to redirect all routes to `index.html` for proper client-side routing.

For detailed deployment options, refer to `DEPLOYMENT.md`.

## Future Improvements / Roadmap

- [ ] Add comprehensive testing suite (Jest, React Testing Library)
- [ ] Implement content management system for dynamic updates
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Enhance performance with lazy loading and code splitting
- [ ] Integrate analytics and user tracking
- [ ] Add internationalization support
- [ ] Implement dark mode toggle
- [ ] Add contact forms with backend integration
- [ ] Create admin dashboard for content management

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Code Style
- Follow React and JavaScript best practices
- Use ESLint and Prettier for code formatting
- Write clear, concise commit messages
- Add comments for complex logic

## License

This project is proprietary and confidential. All rights reserved by GM University.
