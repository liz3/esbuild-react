# esbuild-react
This is a minimal setup for a react project using [esbuild](https://esbuild.github.io/) as the build system.

## Why?
I do not agree with the react docs pushing you to use next.js or remix saying its hard to get started with react and giving you a long explanation of why you should use them.

I put this together in about 30 minutes just looking at the esbuild docs(im no expert in esbuild at all), it uses one plugin for copying the public folder into the build folder, thats it. 
Further of course it provides a minimal dev server script to have auto reloading and auto routing in the dev env.

## Scripts
These require to install deps first, `bun/npm/pnpm/yarn install`
### Dev server
```sh
npm run dev # you can optionally pass PORT env var for listen port
```
### Build
Outputs to `build`
```sh
npm run build
```

# Configuration
This is a very minimal setup, to edit anything you can simply see: [build.mjs](/build.mjs)

# LICENSE
Free software under GPL 2.0