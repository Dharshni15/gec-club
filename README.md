# Gender Equality Club Website

A modern, elegant, and fully responsive website for the Gender Equality Club at Kongu Engineering College. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

### 🎨 **Modern Design & UI/UX**
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: AOS animations, hover effects, and smooth transitions
- **Professional Layout**: Clean, modern design with gradient accents and glassmorphism effects

### 🧭 **Navigation & Structure**
- **Animated Navbar**: Fixed navigation with scroll effects and mobile menu
- **Smooth Routing**: React Router with animated page transitions
- **Scroll to Top**: Animated button that appears when scrolling down

### 📅 **Events Management**
- **Event Countdown Timer**: Real-time countdown to upcoming major events
- **Live Search & Filtering**: Search events by title, description, or location
- **Category Filtering**: Filter by event type (Workshop, Seminar, etc.)
- **Status Tracking**: View upcoming, ongoing, and completed events
- **Event Details**: Comprehensive event information with highlights and attendee counts

### 🖼️ **Gallery System**
- **Year-based Organization**: Photos organized by year (2023, 2024, 2025)
- **Advanced Lightbox**: Full-screen image viewer with navigation
- **Keyboard Navigation**: Arrow keys and ESC for navigation
- **Image Counter**: Shows current position in gallery
- **Responsive Grid**: Adaptive layout for different screen sizes

### 👥 **Team & Leadership**
- **Office Bearers**: Complete team structure with photos and details
- **Faculty Advisors**: Faculty coordinator information with contact details
- **Organizational Chart**: Clear hierarchy and responsibilities

### 📊 **Interactive Elements**
- **Achievements Counter**: Animated counters for club statistics
- **Quote of the Day**: Daily inspirational quotes with refresh functionality
- **Testimonials Carousel**: Student and guest feedback with auto-play
- **Contact Form**: Integrated contact form with Google Sheets storage

### 🔧 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: High-quality, accessible UI components
- **Responsive Images**: Optimized image handling and lazy loading
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gec
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

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Navbar.tsx     # Navigation component
│   ├── Footer.tsx     # Footer component
│   ├── ScrollToTop.tsx # Scroll to top button
│   ├── EventCountdown.tsx # Event countdown timer
│   ├── AchievementsCounter.tsx # Statistics counter
│   ├── QuoteOfTheDay.tsx # Daily quote widget
│   ├── TestimonialsCarousel.tsx # Testimonials carousel
│   └── ContactForm.tsx # Contact form component
├── pages/              # Page components
│   ├── Home.tsx       # Homepage
│   ├── Events.tsx     # Events listing
│   ├── Gallery.tsx    # Photo gallery
│   ├── OfficeBearers.tsx # Team information
│   ├── RegistrationForm.tsx # Event registration
│   └── NotFound.tsx   # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and media files
└── App.tsx             # Main app component
```

## 🔌 Google Sheets Integration

### Setup Instructions

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Copy the Sheet ID from the URL

2. **Set up Google Apps Script**
   - Go to [Google Apps Script](https://script.google.com)
   - Create a new project
   - Copy the code from `google-apps-script.js`
   - Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
   - Update admin email addresses in `ADMIN_EMAILS` array

3. **Deploy the Script**
   - Click "Deploy" > "New deployment"
   - Choose "Web app" as type
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the Web app URL

4. **Update Contact Form**
   - In `src/components/ContactForm.tsx`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your deployment URL

### Features
- **Automatic Data Storage**: Form submissions stored in Google Sheets
- **Email Notifications**: Instant notifications to administrators
- **Professional Formatting**: Beautiful HTML email templates
- **Data Validation**: Required field validation and error handling

## 🎨 Customization

### Colors & Theme
The website uses a custom design system defined in `src/index.css`:

```css
:root {
  --primary: 269 70% 50%;      /* Deep Purple */
  --secondary: 180 60% 45%;    /* Empowering Teal */
  --accent: 25 95% 60%;        /* Vibrant Orange */
}
```

### Adding New Components
1. Create component in `src/components/`
2. Import and use in desired page
3. Follow existing naming conventions
4. Use Tailwind CSS classes for styling

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Custom domain can be added in settings

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Run `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- Use TypeScript for all components
- Follow React functional component pattern
- Use Tailwind CSS for styling
- Implement proper error handling
- Add loading states for async operations

## 📊 Performance

- **Lazy Loading**: Images and components load on demand
- **Optimized Images**: WebP format with fallbacks
- **Code Splitting**: Route-based code splitting
- **Minified Assets**: Production builds are optimized

## 🔒 Security

- **Input Validation**: Form data validation on client and server
- **XSS Protection**: Sanitized user inputs
- **HTTPS Only**: Secure connections for production
- **Rate Limiting**: Google Apps Script includes basic rate limiting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: dinesh.nova@gmail.com
- **Phone**: +91 99448 46480
- **College**: Kongu Engineering College, Perundurai, Erode

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **React Team** for the amazing framework
- **Kongu Engineering College** for support and resources

---

**Built with ❤️ for the Gender Equality Club at Kongu Engineering College**
