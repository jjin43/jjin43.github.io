# [jjin43.github.io](https://jjin43.github.io/)
Personal Website - Justin Jin / jjin43

## Modifications
```\lib\site-config.ts``` contains personal site informations (title, keywords, etc).
```\lib\data.ts``` contains data entries for projects and experiences.
```\public\resume.pdf``` update downloaded resume.

## Installation 
Download the project to your computer and install needed packages with command:

```bash
$ npm install
```
Then create .env file:
```bash
SITE_URL='https://example.com' ## Required to generate sitemap by next-sitemap 
RESEND_API_KEY='your_resend_api_key' ## Required to send email by resend
```

Then start the project on the local server with the command:

```bash
$ npm run dev
```

and open http://localhost:3000.

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Framer-motion
- React-hook-form
- Resend