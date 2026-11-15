# Eubert Borromeo – Portfolio

Static portfolio built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 4. It exports to plain HTML.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
```

## Update content
- Text, projects, skills, journey: edit `lib/data.ts`.
- Screenshots: put `.webp` files in `public/images/` and reference them by file name (without extension) in `lib/data.ts`.
- Profile photo: add `public/images/profile.webp` and replace the initials block in `app/page.tsx`.
- Blur client logos before committing screenshots.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New > Project > import the repo. Framework is detected as Next.js. No settings to change.
3. Every `git push` to `main` redeploys.

## Contact form
Create a free form at formspree.io, then add the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (the ID after `/f/`) in Vercel > Settings > Environment Variables. Without it, the form opens the visitor's email app.
