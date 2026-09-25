---
title: Usage
description: Find, install, update, and maintain packages with Homebrew.
---

After [installing Homebrew](./installation.md), use `brew` to manage formulae
(typically command-line tools) and casks (macOS apps and other packaged
software). In the commands below, replace `NAME` with a search keyword and
`FORMULA` with the exact formula name you want to manage. See [Cask](./cask.md)
for cask commands and behavior.

## Find a package

| Command | What it does |
| --- | --- |
| `brew search NAME` | Search available formulae and casks by keyword. |
| `brew info FORMULA` | Show the formula's description, available version, dependencies, and installation details. Read this before installing an unfamiliar formula. |
| `brew deps FORMULA` | Show the formula's dependencies; before installation, this helps identify additional packages Homebrew may install. |

`brew info` may also show **caveats**: package-specific instructions that can
matter after installation, such as adding a directory to your `PATH`.

## Install and inspect packages

| Command | What it does |
| --- | --- |
| `brew install FORMULA` | Install the formula and any dependencies it needs. |
| `brew list --formula` | List installed formulae, including packages installed as dependencies. |
| `brew list --cask` | List installed casks. |
| `brew list --formula --installed-on-request` | List formulae that were installed on request rather than as dependencies. |
| `brew leaves` | List installed formulae that no other installed formula or cask depends on. This is a view of dependencies, not necessarily a list of packages you chose yourself. |
| `brew list --versions FORMULA` | Show the installed version or versions of the named formula. |

## Update and upgrade

`update` and `upgrade` do different things: **`brew update` refreshes Homebrew
and its package definitions; `brew upgrade` updates installed packages**.
Review the outdated list before upgrading everything.

| Command | What it does |
| --- | --- |
| `brew update` | Fetch the latest Homebrew code and package definitions. It does not upgrade installed packages. |
| `brew outdated` | List installed formulae and casks for which Homebrew reports a newer version. |
| `brew upgrade FORMULA` | Upgrade only the named installed formula, if an upgrade is available. |
| `brew upgrade` | Upgrade all outdated, unpinned installed packages. This can include casks; see [Cask](./cask.md) for apps that update themselves. |
| `brew pin FORMULA` | Prevent `brew upgrade` from upgrading the formula. Use sparingly because a pinned formula can interfere with packages that need a newer dependency. |
| `brew unpin FORMULA` | Allow Homebrew to upgrade the formula again. |

## Remove packages and unused files

Uninstalling a formula does not necessarily remove dependencies that were
installed for it. Preview automatic removals before running them, especially
if another tool outside Homebrew uses one of those libraries.

| Command | What it does |
| --- | --- |
| `brew uninstall FORMULA` | Uninstall the named formula. It does not automatically remove every dependency that was installed with it. |
| `brew autoremove --dry-run` | Show formulae that Homebrew considers unused dependencies without removing them. |
| `brew autoremove` | Remove those unused dependency formulae after reviewing the preview. |
| `brew cleanup --dry-run` | Show old formula versions, outdated downloads, and other stale Homebrew files that cleanup would remove. |
| `brew cleanup` | Remove those old versions and cached files. This is different from `brew autoremove`, which removes unused dependencies. |

Homebrew also runs some cleanup automatically during installs and upgrades;
`brew cleanup` is useful when you want to inspect or reclaim space yourself.

## Troubleshoot and learn more

| Command | What it does |
| --- | --- |
| `brew doctor` | Check the system for potential Homebrew problems. A warning is not necessarily a problem if the affected packages work. |
| `brew config` | Print Homebrew and system configuration details useful when diagnosing an issue. |
| `brew help COMMAND` | Show built-in help for the named Homebrew command. Replace `COMMAND` with a command name. |

For the complete command reference, see the [Homebrew manual](https://docs.brew.sh/Manpage).
