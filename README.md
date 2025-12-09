# [jjin43.github.io](https://jjin43.github.io/)

Personal Website - Justin Jin / jjin43

## Modifications

```\lib\site-config.ts``` contains personal site information (title, keywords, etc).
```\lib\data.ts``` contains data entries for projects and experiences.
```\public\resume.pdf``` update downloaded resume.

## Installation

Clone the repo and install needed packages with:

```bash
npm install
```

Then create .env file:

```bash
SITE_URL='https://example.com' ## Required to generate sitemap by next-sitemap
```

Then start the project on the local server with:

```bash
npm run dev
```

and open <http://localhost:3000>.

Finally, deploy to github pages with:

```bash
npm run deploy
```

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
