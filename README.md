# Onushilon Hub - Next.js Migration

This is the Next.js version of Onushilon Hub, migrated from Vite + React to Next.js with SSR and TypeScript.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Server-Side Rendering (SSR)** for better SEO and performance
- **Dark/Light Theme** support
- **Authentication** system
- **Content Protection** features
- **Mobile-responsive** design
- **Analytics** integration with Vercel

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run with Turbo (faster)
npm run dev:turbo
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── dashboard/         # Dashboard routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── pages/            # Page components
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── contexts/             # React contexts
├── data/                 # Static data and configurations
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
```

## Key Migration Changes

1. **Routing**: Migrated from React Router to Next.js App Router
2. **SSR**: Added server-side rendering capabilities
3. **File Structure**: Reorganized to follow Next.js conventions
4. **Components**: Updated to work with Next.js patterns
5. **Styling**: Maintained Tailwind CSS with Next.js optimizations
6. **Performance**: Added Next.js optimizations and analytics

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... other Firebase config
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License.