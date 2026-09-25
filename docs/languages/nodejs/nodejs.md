---
title: Node.js
---

[Node.js](https://nodejs.org/) runs JavaScript outside the browser. It also
provides the runtime for many frontend build tools. Homebrew installs Node.js
and its bundled [npm](./npm.md) command.

## Installation

Install Node.js and its bundled npm with Homebrew:

```sh
brew install node
```

Check the Node.js version:

```sh
node --version
```

Check the npm version:

```sh
npm --version
```

Node.js releases change over time. If a project specifies a Node.js version
in `package.json`, `.nvmrc`, or its documentation, check compatibility before
using the Homebrew version.
