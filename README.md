Template for small typescript projects

Below some libraries included

### - Jest

https://jestjs.io

- <code>jest.config.ts</code> This is important because Jest does not understand typescript so we have to transform it
  first before the test. Without this you may have the
  error: `Error: SyntaxError: Cannot use import statement outside a module`
- <code>package.json</code> Here there is:
  - `@types/jest`: This package contains type definitions
  - `jest`: Jest itself
  - `ts-jest`: A Jest transformer with source map support that lets you use Jest to test projects written in
    TypeScript.

### - Prettier

https://prettier.io

### - Zod

https://zod.dev
