# hzanhle.github.io

My portfolio, live at **https://hzanhle.github.io**.

Built with Vite, React, TypeScript, Tailwind CSS and Motion. Every push to `main` is built and deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Editing content

All text, projects, skills and links live in [`src/data/profile.ts`](src/data/profile.ts). Change that file and push; the site redeploys in about a minute.

- **Add a CV:** put the PDF at `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"` in `profile`. Resume buttons appear in the navbar and hero.
- **Replace a project cover with a screenshot:** add the image under `src/assets/projects/`, import it at the top of `profile.ts`, and set the project's cover to `scene: "image", image: yourImport`.
- **Hide the "Open to new opportunities" badge:** set `openToWork: false`.

## Running locally

```bash
pnpm install
pnpm dev
```

`pnpm build` type-checks and writes the static site to `dist/`.
