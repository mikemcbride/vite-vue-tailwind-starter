# Vite with Vue and Tailwind

This is a template repo to quickly scaffold an app with Vue 3 and Tailwind for prototyping.

## What You Get

By using this template, you've got a full featured setup ready to go for building apps. You get:

-   [Vite](https://vitejs.dev) as the dev server.
-   [Vue 3](https://vuejs.org) for the app framework.
-   [Pinia](https://pinia.vuejs.org) for state management
-   [Vue Router](https://router.vuejs.org) for routing
-   [Tailwind CSS](https://tailwindcss.com) for styling.
-   [Vitest](https://vitest.dev) and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro) for testing.
-   [Prettier](https://prettier.io) formatting on commit with husky and lint-staged.
-   [eslint](https://eslint.org) for linting
-   [Headless UI](https://headlessui.dev) components
-   [Heroicons](https://heroicons.com) for icons

`/api` routes are automatically proxied for use with running serverless functions locally alongside the app with `vercel dev`. I use Vercel, so this setup is optimized to make it easy for me. If I run `vc dev` instead of `npm run dev`, and the project is configured, Vercel will run the UI on a separate port and proxy API calls to the node app running on `:3000`.

It comes with a `<CounterButtons>` component that has increment/decrement buttons to update a "count" value. This component has tests built out so you have a reference for how to set up future tests.

`<MyComponent>` file exists but it just displays some text - "Let's get started". This is the file you'll use for prototyping. Rename as you see fit.
