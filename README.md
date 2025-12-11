# [jjin43.github.io](https://jjin43.github.io/)

Personal Website - Justin Jin / jjin43

## Data Location

```\lib\site-config.ts``` - personal site information (title, keywords, etc).  
```\lib\data.ts``` - data entries for components.  
```\public\files\resume.pdf``` - downloadable resume.  

## Installation

Clone the repo and install needed packages with:

```bash
npm install
```

Then create .env file with the link:

```bash
SITE_URL='https://example.com'  
## Required to generate sitemap by next-sitemap
```

Then start the project on the local server with:

```bash
npm run dev
```

and view page at <http://localhost:3000>.

Finally, deploy to github pages with:

```bash
npm run deploy  
## verify that /out exists in root dir after build step
```

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
