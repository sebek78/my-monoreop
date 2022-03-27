# Nx Monorepo Cheat Sheet

## React

### Docs

[React Plugin Docs](https://nx.dev/react/overview)

### Setup

You can add a new application with the following<br>
`nx g @nrwl/react:app my-new-app`

To start the application in development mode, run<br>
`nx serve my-new-app`

And add a new library as follows<br>
`nx g @nrwl/react:lib my-new-lib`

### Generating components and hooks

Adding a component to an existing project can be done with<br>
`nx g @nrwl/react:component my-new-component \ --project=my-new-app`

If you want to export the component from the library use --export<br>
`nx g @nrwl/react:component my-new-component \ --project=my-new-lib \ --export`

If you want to add a new hook, run the following<br>
`nx g @nrwl/react:hook my-new-hook --project=my-new-lib`

### Using

You can run unit tests with<br>
`nx test my-new-app`

You can also run E2E tests for applications<br>
`nx e2e my-new-app-e2e`

React applications can be build with<br>
`nx build my-new-app`

And if you generated a library with --buildable, then you can build a library as well<br>
`nx build my-new-lib`

The application in dist is deployable, and you can try it out locally with<br>
`npx http-server dist/apps/my-new-app`
