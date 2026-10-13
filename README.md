# Angular Portfolio

A personal developer portfolio built with Angular 19. It presents an introduction, skills, selected projects, a learning journey, and contact links in a responsive single-page layout.

## Features

- Responsive navigation with a mobile menu
- Dark and light themes, with the selected theme saved in the browser
- About, skills, projects, journey, and contact sections
- Local portrait and hero image assets
- GitHub Pages deployment support

## Components

- `HeaderComponent` — navigation, mobile menu, and theme switch
- `ContentComponent` — hero, skills, projects, journey, and contact sections
- `AboutComponent` — developer introduction
- `FooterComponent` — footer and back-to-top link

## Run locally

Install dependencies, then start the Angular development server:

```bash
npm install
npm run ng -- serve
```

Open the local URL printed by Angular CLI, usually `http://localhost:4200/`.

## Build

```bash
npm run build
```

The production build is written to `dist/angular-portfolio/`.

## Deploy to GitHub Pages

The deployment configuration uses `/angular-portfolio/` as the base path. Deploy with:

```bash
npm run ng -- deploy
```

In the GitHub repository settings, enable Pages and select the `gh-pages` branch as the publishing source.
