# App built using Node, Express, and any database

## Note for future projects

### These steps to set up a new TypeScript project with nodemon have already been performed

- Create remote repo (e.g. on GitHub) and copy URL.
- `git clone <URL>`, `cd` into new directory.
- Create `.gitignore` with `node_modules` and `.env`
- Create `.env`.
- `npm init -y`.
- `npm i -D typescript ts-node nodemon`.
- `npm i express @types/express dotenv`.
- `tsc --init`.
- In `tsconfig.json`, uncomment the following:
  - `"declaration": true`.
  - `"declarationMap": true`.
  - `"outDir": "build"`.
  - `"noImplicitAny": true`.
  - `"alwaysStrict": true`.
  - `"noUnusedLocals": true`.
  - `"noUnusedParameters": true`.
  - `"noImplicitReturns": true`.
- In `package.json`, add/modify the following:
  ```
  "main": "src/index.js",
  "types": "build/index.d.ts",
  "files": [
    "build",
    "package.json",
    "package-lock.json",
    "README.md"
  ],
  "scripts": {
    "dev": "npx nodemon src/index.ts",
    "build": "tsc --build",
    "start": "node build/index.js"
  },
  ```
- Create `index.ts` and add your code.
- Start the app in dev with `npm run dev`.
- Build the app with `npm run build`.
- Once built, start the app in prod with `npm start`.
