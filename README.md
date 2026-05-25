# Amintha Jayasooriya Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal design inspired by industry-leading portfolios
- **Responsive**: Mobile-first approach with seamless experience across all devices
- **Dark Mode**: Automatic dark/light theme with system preference detection
- **Smooth Animations**: Subtle micro-interactions and scroll-based animations
- **Accessible**: WCAG compliant with proper focus management and screen reader support
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Complete meta tags and structured data

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom component library with shadcn/ui patterns

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/amintha-portfolio.git
cd amintha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Navbar.tsx
│   └── ...
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   └── ...
├── content/           # Content configuration
│   └── profile.ts     # Single source of truth for all content
├── hooks/             # Custom React hooks
├── lib/               # Utilities and helpers
└── ...
```

## Customization

### Content

All content is centralized in `src/content/profile.ts`. Update this file to customize:

- Personal information
- Hero section text and CTAs
- About section and highlights
- Experience timeline
- Projects showcase
- Skills and achievements
- Contact information

### Styling

The design system uses:

- **Primary Color**: `#6C5CE7` (indigo-violet)
- **Accent Color**: `#00D1FF` (cyan)
- **Typography**: Inter font family
- **Spacing**: 8px spacing system
- **Animations**: 200-400ms durations with ease-out

### Theme

Dark mode is handled automatically with:
- System preference detection
- Manual toggle capability
- Persistent localStorage

## Performance

- Lighthouse scores target: Performance ≥95, Accessibility ≥98, Best Practices ≥95, SEO ≥95
- Images are lazy-loaded and optimized
- Code is tree-shaken and minified
- Fonts are preloaded for optimal LCP

## Deployment

The project is ready for deployment to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated builds

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Lakshitha Madushan - [lakshitha@example.com](mailto:lakshitha@example.com)

Project Link: [https://github.com/your-username/lakshitha-portfolio](https://github.com/your-username/lakshitha-portfolio)