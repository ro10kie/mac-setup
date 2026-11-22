---
title: Oh My Zsh
description: Add optional themes and plugins to Zsh.
---

[Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) is an optional framework for
Zsh themes and plugins. Install it if you want to manage these features through
its configuration.

## Installation

First, check that Zsh is available:

```sh
zsh --version
```

Then check that Git is available:

```sh
git --version
```

These two commands only check prerequisites. To install Oh My Zsh, run the
project's [official installer](https://github.com/ohmyzsh/ohmyzsh#basic-installation):

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

The installer places the framework in `~/.oh-my-zsh` and creates a `~/.zshrc`
that loads it. If `~/.zshrc` already exists, the installer renames it to
`~/.zshrc.pre-oh-my-zsh`. Review the saved settings before copying anything
into the new file. Themes and plugins are configured in `~/.zshrc`; see the
[official configuration guide](https://github.com/ohmyzsh/ohmyzsh#using-oh-my-zsh)
when you need them. Open a new Terminal window after installation.
