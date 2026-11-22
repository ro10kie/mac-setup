---
title: Homebrew
description: Install Homebrew on an Apple Silicon Mac.
---

[Homebrew](https://brew.sh/) is a package manager for macOS. It calls
command-line packages **formulae** and packaged applications **casks**. Its
default prefix on Apple Silicon is `/opt/homebrew`. Install a package when it
supports work you actually need to do; Homebrew can manage the machine-level
tool while a project's own tooling manages its dependencies.

## Installation

**Before installing Homebrew**, install
**[Command Line Tools for Xcode](../command-line-tools.md)**. Confirm that macOS
can find the active developer tools with `xcode-select -p` before continuing.

Open Terminal and run the installer from the [Homebrew website](https://brew.sh/):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Read the changes displayed by the installer and follow its prompts. Follow the
post-install instructions it prints. For the default Apple Silicon prefix and
Zsh login shell, add this line once to `~/.zprofile` so new Terminal windows
can find `brew`:

```sh
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Open a new Terminal window and verify the executable and prefix:

```sh
command -v brew
brew --prefix
```

They should print `/opt/homebrew/bin/brew` and `/opt/homebrew`. See
[Homebrew's installation documentation](https://docs.brew.sh/Installation)
if the installer gives different instructions for your shell.

Continue with [Usage](./usage.md) for package commands and [Cask](./cask.md)
for desktop applications.
