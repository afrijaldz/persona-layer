# Persona Layer

Use persona design system without headache

## Setup

Make sure to install the dependencies:

```bash
yarn add -D persona-layer
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: "persona-layer",
});
```

# Persona Layer

`Persona Layer` is a module designed to simplify the process of installing Persona Design System for your application.

## Installation

To install `Persona Layer`, run the following command:

```bash
yarn add -D persona-layer
```

After installation, add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ["persona-layer"],
});
```

## Contributing

We welcome contributions to `Persona Layer`. If you’d like to contribute, please follow these steps:

1. **Enable Corepack**: Ensure Corepack is enabled by running:

   ```bash
   corepack enable
   ```

2. **Install Dependencies**: Install all necessary dependencies by running:

   ```bash
   yarn install
   ```

3. **Generate Type Stubs**: Run the following command to generate type stubs:

   ```bash
   yarn dev:prepare
   ```

4. **Start Development Mode**: Use the following command to start the playground in development mode:
   ```bash
   yarn dev
   ```

This will set up your environment to develop and test `Persona Layer`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
