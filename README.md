# Gaussian Viewer

## 1. Put your four KSPLAT files here

public/scenes/
- scene1.ksplat
- scene2.ksplat
- scene3.ksplat
- scene4.ksplat

## 2. Install and run

npm install
npm run dev

## 3. Build

npm run build
npm run preview

## 4. GitHub Pages

Push the repository to GitHub on the `main` branch.
In GitHub:
Settings -> Pages -> Source: GitHub Actions

The workflow in .github/workflows/deploy.yml will build and deploy the Vite site.

The Vite config uses base: './' and main.js uses import.meta.env.BASE_URL, so the scene URLs also work under:
https://USERNAME.github.io/REPOSITORY/
