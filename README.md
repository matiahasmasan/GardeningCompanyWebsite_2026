# Grădina ZAK - Website

A modern, responsive static website for Grădina ZAK, a gardening and landscaping company based in Baia Mare, Maramureș.

## About

Grădina ZAK is a professional gardening and landscaping service provider with over 25 years of experience. This website showcases their services, portfolio projects, and provides customers with easy contact options.

## Features

- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Project Portfolio** - Showcase of completed gardening and landscaping projects
- **Contact Page** - Easy customer inquiry form
- **Legal Pages** - Privacy Policy and Cookie Consent information
- **SEO Optimized** - Structured metadata for search engine visibility
- **Performance Analytics** - Integrated with Vercel Analytics and Speed Insights
- **Accessibility** - WCAG compliant components and navigation

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: FontAwesome
- **Linting**: ESLint
- **Analytics**: Vercel Analytics & Speed Insights

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GradinaZak/app
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CookieConsent.jsx
│   ├── Footer.jsx
│   ├── Lightbox.jsx
│   ├── Navbar.jsx
│   └── ScrollIndicator.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   ├── CookiePolicy.jsx
│   └── NotFound.jsx
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
public/
├── images/             # Static images and assets
├── robots.txt          # SEO robots configuration
└── sitemap.xml         # XML sitemap for search engines
```

## SEO

- Robots.txt configured for search engine crawling
- Sitemap.xml for improved indexing
- Meta tags for social media sharing and description
- Structured data for better search visibility

## Pages

- **Home** - Landing page with company information and services
- **Projects** - Portfolio showcasing completed projects
- **Contact** - Contact form for customer inquiries
- **Privacy Policy** - Legal privacy information
- **Cookie Policy** - Cookie usage disclosure
- **404** - Custom not found page

## Legal Compliance

- Cookie Consent popup for GDPR compliance
- Comprehensive Privacy Policy
- Cookie Policy documentation

## Analytics

The website integrates with:

- **Vercel Analytics** - Real-time performance metrics
- **Vercel Speed Insights** - Page performance analysis

## Deployment

This project is optimized for deployment on Vercel or similar static hosting platforms. The `dist/` directory contains the production-ready build.

## License

All rights reserved © Grădina ZAK

## Contact

For inquiries about the website or services, visit the Contact page or reach out directly through the website.
