---
title: fnm
---

[fnm](https://github.com/Schniz/fnm) installs and selects [Node.js](./nodejs.md)
versions. Homebrew installs and updates fnm; fnm downloads Node.js, which
includes [npm](./npm.md).

## Installation

Install fnm with Homebrew:

```sh
brew install fnm
```

Check that fnm is installed:

```sh
fnm --version
```

Add this line to `~/.zshrc` to initialize fnm in Zsh:

```sh
eval "$(fnm env --use-on-cd --shell zsh)"
```

Open a new Terminal window to load the configuration. If you want to apply the
change in the current Zsh session, run:

```sh
source ~/.zshrc
```

Install the Node.js version you need and activate it in the current shell.
Replace `NODE_VERSION` with the chosen version:

```sh
fnm install NODE_VERSION --use
```

Set that version as the default for new shells:

```sh
fnm default NODE_VERSION
```

Check which Node.js version fnm has selected:

```sh
fnm current
```

Check the active Node.js version:

```sh
node --version
```

Check the npm version bundled with that Node.js installation:

```sh
npm --version
```

## Usage

List the Node.js versions installed by fnm:

```sh
fnm list
```

Switch the current shell to another installed version. Replace `NODE_VERSION`
with the version you want to use:

```sh
fnm use NODE_VERSION
```

From a project's root directory, save the active Node.js version to
`.node-version`:

```sh
node --version > .node-version
```

Commit `.node-version` with the project. The `--use-on-cd` setup above lets fnm
select an installed version when you enter a directory containing
`.node-version` or `.nvmrc`. Install the required version first if it is not
already available.
