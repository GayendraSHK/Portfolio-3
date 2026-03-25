# Kaveesha Gayendra's Portfolio

A modern, dark-themed software engineer portfolio built with Next.js.

It includes:
- Responsive single-page layout
- Animated section reveal effects
- Project cards with popup detail modal
- Contact form integration via Web3Forms
- Skills marquee, education, and experience timelines

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS + SCSS
- React Icons
- Lottie React
- React Toastify

## Getting Started

### 1. Clone

```bash
git clone https://github.com/GayendraSHK/Portfolio-3.git
cd Portfolio-3
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
NEXT_PUBLIC_GTM=GTM-XXXXXXX
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Run production server
npm run lint    # Run lint checks
```

## Customize Content

Update your profile content in:
- `utils/data/personal-data.js`
- `utils/data/experience.js`
- `utils/data/educations.js`
- `utils/data/projects-data.js`
- `utils/data/skills.js`

To update project card images, place files in `public/image` and reference them in `utils/data/projects-data.js` using paths like `/image/your-image.jpg`.

## Current UI Notes

- Theme switcher has been removed.
- Portfolio is locked to dark theme.
- Section animations trigger as sections enter the viewport.

## Deployment

Recommended: deploy on Vercel.

Basic deployment flow:
1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Add required environment variables in Vercel project settings.
4. Deploy.

