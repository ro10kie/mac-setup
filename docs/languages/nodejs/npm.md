---
title: npm
---

[npm](https://docs.npmjs.com/) is the package manager bundled with
[Node.js](./nodejs.md). It installs project dependencies declared in
`package.json` and runs scripts defined there.

## Installation

Install [Node.js through fnm](./fnm.md). npm is included with the selected
Node.js version, so it does not need a separate Homebrew installation.

Check the npm version:

```sh
npm --version
```

## Usage

Initialize a package in the current directory:

```sh
npm init -y
```

Install a dependency, replacing `PACKAGE` with its package name. npm updates
`package.json` and `package-lock.json`:

```sh
npm install PACKAGE
```

For an existing project, enter its directory. Replace `PROJECT_DIRECTORY`
with its actual location:

```sh
cd PROJECT_DIRECTORY
```

If the project has `package-lock.json`, install the locked dependencies:

```sh
npm ci
```

List the scripts available in `package.json`:

```sh
npm run
```

Run a script that appears in the project's `package.json`, replacing `SCRIPT`
with its name:

```sh
npm run SCRIPT
```

Commit `package.json` and `package-lock.json` to the project. `node_modules`
is generated locally and is generally ignored by Git.

The [npm CLI documentation](https://docs.npmjs.com/cli/commands/) explains
`npm install`, `npm ci`, and `npm run` in detail.
