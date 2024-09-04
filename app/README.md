# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# tsconfig.json

- This file contains the recommended basic TypeScript configuration for your project, including resolved aliases injected by Nuxt or modules you are using.

# package.json

- it contains the dependencies of the application

```
{
 "name": "nuxt-app", // read more about https://docs.npmjs.com/cli/v10/configuring-npm/package-json
 "private": true,
 "type": "module",

 "scripts": {
   "build": "nuxt build", //Readmore: https://nuxt.com/docs/api/commands/build
   "dev": "nuxt dev",//Readmore: https://nuxt.com/docs/api/commands/dev
   "generate": "nuxt generate", //Readmore: https://nuxt.com/docs/api/commands/generate
   "preview": "nuxt preview", //Readmore: https://nuxt.com/docs/api/commands/preview
   "postinstall": "nuxt prepare" //Readmore: https://nuxt.com/docs/api/commands/prepare
 },
 "dependencies": {
   "@nuxt/content": "^2.13.2", //Readmore: https://nuxt.com/docs/guide/directory-structure/content

   "@pinia/nuxt": "^0.5.4",//Readmore: https://pinia.vuejs.org/ssr/nuxt.html
   "bootstrap": "^5.2.3", //Readmore: https://www.docs4.dev/posts/how-to-add-bootstrap-5-to-nuxt-3-a-beginner-s-guide

   "nuxt": "^3.13.0", //when create project with nuxi cli Readmore:  https://nuxt.com/docs/getting-started/installation
   "vue": "latest" //when create project with nuxi cli // Readmore: https://nuxt.com/docs/getting-started/installation
 },
 "overrides": {
   "vue": "latest" // when add pinia
 }
}

```

# Nuxt Directory Structure which is describe very nicely :

https://nuxt.com/docs/guide/directory-structure/app
