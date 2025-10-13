# f3d-website

This is the source code of the f3d wbesite visible [here](https://f3d.app), under the BSD [License](LICENSE).
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator for React-based documentation sites.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Update documentation

All the files from `./docs` and `./dev` are automatically generated. They can be fetched from the main `f3d` repository or generated from doxygen. In order to update them, run the following command:

```bash
npm run update-doc
```
