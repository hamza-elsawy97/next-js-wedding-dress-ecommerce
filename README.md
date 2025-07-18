# Wedding Dress Ecommerce

A high-performance, elegant ecommerce wedding dress website built with Next.js 15, featuring a sophisticated dark gold theme and seamless API integration.

## Features

- **Next.js 15** with App Router architecture
- **Dark Gold Theme** with light/dark mode support
- **Tailwind CSS v4** with custom theme configuration
- **SWR** for efficient data fetching and caching
- **TypeScript** for type safety
- **Responsive Design** optimized for all devices
- **Performance Optimized** with image optimization and code splitting

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components
│   ├── product/        # Product-related components
│   └── auth/           # Authentication components
└── lib/                # Utility functions and services
    ├── api.js          # API service layer
    ├── auth.js         # Authentication utilities
    ├── theme.js        # Theme configuration
    └── constants.js    # Application constants
```

## Theme Colors

The application uses a sophisticated dark gold color palette:

- **Primary Gold**: #D4AF37
- **Dark Gold**: #B8860B  
- **Light Gold**: #F7E98E
- **Light Background**: #FFFEF7
- **Dark Background**: #1A1A1A

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

## API Integration

The application integrates with the [escuelajs API](https://api.escuelajs.co/api/v1) for:
- Product catalog management
- User authentication
- Category-based navigation

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

Built following modern React patterns with:
- Component-driven development
- Context API for state management
- Custom hooks for data fetching
- Error boundaries for robust error handling
- Performance optimization with lazy loading
