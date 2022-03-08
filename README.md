# Vue 3 Vite Starter

A Vue 3 starter template or boilerplate for your new Vue projects using Vite.

<br>

## Features

- [x] ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), and [yarn](https://yarnpkg.com/)

- [x] 📦 [Components auto importing (unplugin-vue-components)](https://github.com/antfu/unplugin-vue-components)

- [x] 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- [x] 🎨 [TailwindCSS](https://tailwindcss.com/) and [HeadlessUI](https://headlessui.dev/)

- [x] 🌙 Switch Theme (light and dark)

- [x] 😃 [Icon Pack Component (unplugin-icons)](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- [x] 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- [x] 📥 [APIs auto importing (unplugin-auto-import)](https://github.com/antfu/unplugin-auto-import)

- [x] 🗂️ [Vue Composition Collection (Vueuse)](https://vueuse.org/)

- [x] 🦾 [TypeScript](https://www.typescriptlang.org/)
  
- [x] Code Styling with Eslint and Prettier

- [x] ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest) and E2E Testing with [Cypress](https://cypress.io/)

- [x] 🚀 CI/CD with [GitHub Actions](https://github.com/features/actions)

- [x] ☁️ Deploy on Netlify, zero-config

- [ ] 🌍 Internalization with I18n
  
- [ ] 📡 Http request with [axios](https://axios-http.com/)

<br>

## Preview
WIP

## Quick Start

> This template requires Node version >=14

- Clone this project to local `https://github.com/RSurya99/vue3-vite-starter.git`
- Install all dependencies `yarn install`
- Start development server `yarn dev` and open `http://localhost:3000` in your browser
- Unit test using `yarn test:unit` and E2E test using`yarn test:e2e`
- Build the project using `yarn build` and use `yarn start` to start production server

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Deploy on Netlify
There are 2 way to upload to netlify within this project. You can use CI/CD for auto deploy, or deploy it directly to netlify

### Using Github Actions to Deploy
- Create new Netlify project and add your repository to it
- Inside Netlify dashboard, go to site settings and copy `API ID` inside Site Information menu (save it on notepad or anything else)
- Click your profile -> open `user settings` -> Applications -> Click `New access token` -> genereate -> and copy the token
-  Go to Github profile settings -> Developer Settings -> Personal access token -> Generate new token -> copy it
-  Then, go to your github project repository -> Settings -> Secrets -> Actions -> and add 3 new repository secret
    1. NETLIFY_AUTH_TOKEN = YOUR_NETLIFY_PERSONAL_ACCESS_TOKEN
    2. NETLIFY_SITE_ID = YOUR_NETLIFY_PROJECT_API_ID
    3. PERSONAL_TOKEN = YOUR_GITHUB_ACCESS_TOKEN
- Save it, and try to push new commit to your repository (the CI/CD scripts will automatically run, and if there's no error in testing, it will automatically deploy your project to netlify)

### Direct Deploy in Netlify
- Go to Netlify dashboard and create new project
- Sync it with your repo and wait a minute for netlify to auto-deploy the project

<br>

## Notes

### Styles
You can find Tailwindcss import in :

```bash
/path/to/assets/css/vendor.css
```

For custom styles, you can add it in :

```bash
/path/to/assets/sass/app.css
```

### Theme Changer
We are using Vueuse to toggle DarkMode, you can find it in :

```bash
/src/composables/dark.ts
```

WIP documentation on how to change the theme


### Internalization
WIP


### Icons
WIP


### API Auto Importing
WIP


## License
This project is licensed under the MIT license, Copyright (c) 2022 Alfian Dwi Nugraha. For more information see the [LICENSE](LICENSE.md) file.