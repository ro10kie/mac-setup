---
title: Zsh
description: Use and configure the default macOS shell.
---

[Zsh](https://support.apple.com/guide/terminal/change-the-default-shell-trml113/mac)
is the default shell for new macOS user accounts. It reads commands entered in
Terminal, starts programs, and handles features such as history and tab
completion. The macOS installation is sufficient for this guide.

## Installation

Zsh is included with macOS. Check the login shell configured for your account:

```sh
echo "$SHELL"
```

On a new macOS account, this normally prints `/bin/zsh`. Check the installed
Zsh version separately:

```sh
zsh --version
```

If Terminal starts a different shell, check **Terminal > Settings > General >
Shells open with** before editing Zsh configuration files.

Zsh reads these files at different points when a shell starts:

| File | When it is read | What to put there |
| --- | --- | --- |
| `~/.zprofile` | When a login shell starts. | Environment and `PATH` setup, such as the [Homebrew](../homebrew/installation.md) `shellenv` line. |
| `~/.zshrc` | When an interactive shell starts. | Prompts, aliases, completion, and plugins such as [Oh My Zsh](./oh-my-zsh.md). |

With Terminal's default login-shell setting, a new window starts an interactive
login shell, so it reads `~/.zprofile` before `~/.zshrc`.

After editing `~/.zshrc`, open a new Terminal window or reload it in the
current Zsh session:

```sh
source ~/.zshrc
```

After editing `~/.zprofile`, open a new Terminal window so a new login shell
reads the change.
