---
title: fzf
---

[fzf](https://github.com/junegunn/fzf) is an interactive fuzzy finder. It lets
you narrow a list of files or other text by typing part of the item you want.

## Installation

Install fzf with Homebrew:

```sh
brew install fzf
```

Check the installed version:

```sh
fzf --version
```

## Usage

Run `fzf` in a project directory to pick a file. Press Enter to output the
selection, or Ctrl+C to cancel:

```sh
fzf
```

You can also provide a list from another command. For example,
[`ripgrep`](./ripgrep.md) can list project files while respecting ignore rules:

```sh
rg --files | fzf
```

## Customization

For Zsh history search, file selection, and fuzzy completion, add the official
shell integration to `~/.zshrc`:

```sh
source <(fzf --zsh)
```

Open a new terminal after editing the file. The integration provides Ctrl+R
for history and Ctrl+T for file selection. If another fzf initialization line
already exists in `~/.zshrc`, keep only one method of loading the integration.
