---
title: zoxide
---

[zoxide](https://github.com/ajeetdsouza/zoxide) remembers directories you
visit and helps you jump back to them without typing full paths. It learns as
you move between directories in your shell.

## Installation

Install zoxide with Homebrew:

```sh
brew install zoxide
```

Check the installed version:

```sh
zoxide --version
```

Add this line near the end of `~/.zshrc`, after any completion initialization,
so Zsh provides the `z` command:

```sh
eval "$(zoxide init zsh)"
```

Open a new Terminal window to load the change. To apply it in the current Zsh
session instead, run:

```sh
source ~/.zshrc
```

Confirm that `z` is available as a Zsh function:

```sh
whence -w z
```

## Usage

List the recorded directories that are still available:

```sh
zoxide query --list
```

The list may be empty until you visit directories in a shell where zoxide is
initialized.

After visiting a directory at least once, replace `QUERY` with part of its
name to jump back to a matching directory:

```sh
z QUERY
```

If [fzf](./fzf.md) is installed, choose interactively among matching
directories:

```sh
zi QUERY
```

Return to the previous directory:

```sh
z -
```
