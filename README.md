# Bonsa Portfolio

Personal portfolio website for Bonsa H. Mohammed, built with React and Vite.

## Local Development

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

## Git Push

This project already uses:

```text
https://github.com/Burkakoo/Bonsa.git
```

Push updates with:

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

If `node_modules` or `dist` were tracked before, clean them once with:

```powershell
git rm -r --cached --ignore-unmatch node_modules dist
git commit -m "Stop tracking build files"
git push origin main
```

## Deploy To Render

This repo includes:

```text
render.yaml
```

Render deployment steps:

1. Push the latest code to GitHub.
2. Go to the Render dashboard.
3. Click `New`.
4. Choose `Blueprint`.
5. Select the `Burkakoo/Bonsa` repository.
6. Click `Apply`.

Render will use the settings from `render.yaml`.

## Render Config

Current Render config:

```yaml
services:
  - type: web
    name: bonsa-portfolio
    runtime: static
    buildCommand: npm run build
    staticPublishPath: ./dist
```
