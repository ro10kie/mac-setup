---
title: Node.js
---

[Node.js](https://nodejs.org/) runs JavaScript outside the browser. It provides
the runtime for server applications, development tools, and frontend build
systems. Each Node.js installation includes [npm](./npm.md), which manages
JavaScript packages and project scripts.

## Why use fnm?

Different projects may need different Node.js versions. [fnm](./fnm.md) keeps
multiple versions available, lets you choose a default, and can select a
project's version automatically from `.node-version` or `.nvmrc`. This makes it
easier to return to a project with the runtime version it expects.

In this guide, Homebrew installs and updates fnm, while fnm installs and
manages Node.js. The [fnm page](./fnm.md) covers installation and version
selection.
