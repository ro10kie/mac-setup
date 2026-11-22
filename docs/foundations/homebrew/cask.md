---
title: Cask
description: Install and manage macOS applications with Homebrew Cask.
---

Homebrew uses **formulae** primarily for command-line tools and libraries, and
**casks** for software distributed as ready-to-install packages. A cask may
install a macOS app, font, plugin, or vendor installer; it is not limited to
apps with an icon in `/Applications`. Cask support is part of Homebrew, so it
does not need a separate installation. [Install Homebrew](./installation.md)
first if `brew` is not available.

## Find and inspect a cask

Replace `NAME` with a search keyword. After finding a cask, replace `CASK`
with its exact Homebrew name (called its *token*) in the commands below.

| Command | What it does |
| --- | --- |
| `brew search --cask NAME` | Search cask tokens by keyword. |
| `brew info --cask CASK` | Show the cask's description, version, homepage, installation status, and any caveats. |

You can also browse the [Homebrew Cask catalog](https://formulae.brew.sh/cask/).
Check the app's publisher and any requirements before installing it. Some
casks invoke a vendor-provided installer and may request an administrator
password; the steps and installation location depend on that cask.

## Install and manage a cask

| Command | What it does |
| --- | --- |
| `brew install --cask CASK` | Download and install the cask. Homebrew may also add command-line helpers provided by that cask. |
| `brew list --cask` | List all casks installed through Homebrew. |
| `brew outdated --cask` | List installed casks for which Homebrew reports a newer version. |
| `brew upgrade --cask CASK` | Request an upgrade for the cask; Homebrew may skip it if the app updates itself. |
| `brew uninstall --cask CASK` | Uninstall the cask's managed artifacts. |
| `brew cleanup` | Remove outdated downloads for formulae and casks, plus old installed formula versions. It does not remove an app's settings or documents. |

Some apps update themselves. Homebrew normally skips casks marked as
auto-updating (and those without a fixed version) when checking for upgrades.
An app can therefore report a newer version internally while
`brew outdated --cask` reports nothing. See [Homebrew's manual](https://docs.brew.sh/Manpage)
for the `--greedy` options if you specifically need Homebrew to check those
casks.

Uninstalling a cask does not necessarily remove its preferences, caches, or
other data. If you want a more thorough removal, inspect the cask's `zap`
rules first and then use `brew uninstall --cask --zap CASK`.
`--zap` may remove shared files used by other applications, so use it only
when you intend to remove that additional data. See the
[Cask Cookbook](https://docs.brew.sh/Cask-Cookbook#stanza-zap) for details.
