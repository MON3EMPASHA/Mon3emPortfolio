# Abdelmonem Hatem - Portfolio V5

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **SEO Friendly**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Error Handling**: Graceful error boundaries and loading states
- **Interactive Elements**: Smooth scroll, animations, and micro-interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS** - Animate On Scroll library
- **Material-UI** - React component library
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Type safety (optional)
- **React Helmet Async** - SEO management
- **Performance Monitoring** - Custom hooks for metrics

### Deployment
- **Firebase** - Backend services and hosting
- **FormSubmit** - Contact form handling

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/MON3EMPASHA/Mon3emPortfolio.git
   cd Mon3emPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Background.jsx   # Animated background
│   ├── CardProject.jsx  # Project card component
│   ├── ErrorBoundary.jsx # Error handling
│   ├── Navbar.jsx       # Navigation component
│   ├── SEO.jsx          # SEO management
│   └── SkipToContent.jsx # Accessibility component
├── hooks/               # Custom React hooks
│   ├── useIntersectionObserver.js
│   └── usePerformanceMonitor.js
├── Pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── Portofolio.jsx   # Portfolio section
│   ├── Contact.jsx      # Contact form
│   └── data/            # Static data
├── assets/              # Images and static assets
└── App.jsx              # Main application component
```

## 🚀 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Type Checking (if using TypeScript)
```bash
npm run type-check
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=your-email@example.com
```

### Firebase Setup
1. Create a Firebase project
2. Enable Firestore Database
3. Update Firebase configuration in your components
4. Set up security rules

### FormSubmit Configuration
The contact form uses FormSubmit. Update the email in `Contact.jsx`:
```javascript
const response = await fetch(
  "https://formsubmit.co/YOUR_EMAIL_HERE",
  // ... rest of the configuration
);
```

## 📱 Performance Optimizations

- **Code Splitting**: Automatic vendor chunk splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Manual chunk configuration for better caching
- **Image Optimization**: WebP format support and responsive images
- **Caching**: Optimized cache headers and service worker ready

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Skip Links**: Skip to main content functionality
- **Focus Management**: Proper focus indicators and management
- **Color Contrast**: WCAG AA compliant color schemes

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    // ... more shades
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'fade-in': 'fadeIn 0.5s ease-in-out',
  // ... more animations
}
```

### Content
Update project data in `src/Pages/data/Mon3emProjects.json`:
```json
{
  "id": 0,
  "title": "Project Name",
  "description": "Project description",
  "Image": "project-image-url",
  "TechStack": ["React", "Node.js"],
  "live demo": "https://demo-url.com",
  "github demo": "https://github.com/username/repo"
}
```

## 📊 Performance Monitoring

The project includes custom performance monitoring hooks:
```javascript
import usePerformanceMonitor from './hooks/usePerformanceMonitor';

const { metrics, logMetrics } = usePerformanceMonitor();
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design inspiration from various portfolio templates
- Icons from [Lucide React](https://lucide.dev/)
- Animation libraries: Framer Motion, AOS, GSAP
- UI components from Material-UI and Headless UI

## 📞 Contact

- **Email**: Abdelmonem5hatem@gmail.com
- **LinkedIn**: [Abdelmonem Hatem](https://www.linkedin.com/in/abdelmonem-hatem/)
- **GitHub**: [MON3EMPASHA](https://github.com/MON3EMPASHA)
- **Instagram**: [@abdelmonem_hatem](https://www.instagram.com/abdelmonem_hatem/)

---

**Note**: This portfolio is actively maintained and updated. Feel free to reach out for collaboration opportunities!

