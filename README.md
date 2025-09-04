# Verticulus - Software Development Company Website

A modern, responsive website for Verticulus, a software development company specializing in AI-powered solutions, web development, and custom software.

## Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Mobile-first approach with Tailwind CSS
- **Interactive Animations**: Canvas-based animations and mouse interactions
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Meta tags, structured data, and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/verticulus-website.git
cd verticulus-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
verticulus-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog page
│   └── contact/           # Contact page
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── sections/          # Page sections
├── public/                 # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## Customization

### Colors

Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    // ... more shades
  }
}
```

### Content

- Update company information in components
- Modify testimonials and case studies
- Change contact details and social links

### Animations

Customize animations in `globals.css`:

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

Build the project and deploy the `out` folder:

```bash
npm run build
npm run export
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- Website: [verticulus.com](https://verticulus.com)
- Email: info@verticulus.com
- LinkedIn: [Verticulus](https://linkedin.com/company/verticulus)

Built with ❤️ by Verticulus Team
