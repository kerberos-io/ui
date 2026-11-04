# Kerberos.io UI

Reusable components and widgets that are used inside the Kerberos.io ecosystem. All our components can be reviewed here: https://ui.kerberos.io/.

<img width="1227" alt="Storybook at Kerberos.io" src="https://user-images.githubusercontent.com/1546779/122335041-f3c8ad80-cf3a-11eb-87c2-461ba9707c4f.png">

## Start storybook

We are using Storybook to visualise and interact with the reusable components.

    yarn storybook

## Building with rollup

    yarn build

## Publish to npm

    npm publish --access public
# Package dependency scope

The published runtime dependencies support consumers of `lib/`. Storybook,
Rollup, Sass and SVG/Webpack loaders are development dependencies used to build
the library, not runtime requirements for applications consuming its output.
The tooltip dependency uses the compatible patched UUID 11 API during library
builds; consumers using npm should likewise select UUID >=11.1.1 for its UUID
dependency until the tooltip package updates its declared range.
