# Deployment Guide

## Local Development
```bash
npm run dev
```

## Production Build
```bash
npm run build
```

## Production Server (with proper routing)
```bash
npm start
```

## Access Routes
- Homepage: http://localhost:3000/
- Video Gallery: http://localhost:3000/videos
- All other routes work with proper fallback routing

## Deployment Options

### Option 1: Using the included Express server
1. Build the project: `npm run build`
2. Start the server: `npm start`
3. The server handles all client-side routing automatically

### Option 2: Static hosting (Netlify, Vercel, GitHub Pages)
Add a `_redirects` file (for Netlify) or equivalent for your platform:
```
/*    /index.html   200
```

### Option 3: Apache/Nginx
Configure your server to redirect all routes to index.html

## Video Gallery Navigation
The Video Gallery is now accessible via:
1. Direct URL: `/videos`
2. Navigation menu: "Video Gallery" item in the sidebar
3. All video assets are properly bundled in `dist/assets/Video/`
