---
title: ripgrep
---

[ripgrep](https://github.com/BurntSushi/ripgrep) searches text across a project.
Its `rg` command normally respects ignore files such as `.gitignore`, which
keeps dependency and build directories out of routine searches.

## Installation

Install ripgrep with Homebrew:

```sh
brew install ripgrep
```

Confirm that `rg` is available:

```sh
rg --version
```

## Usage

Replace `PATTERN` with the text or regular expression to search for, and
`EXTENSION` with a file extension.

Search the current directory recursively and include line numbers in results:

```sh
rg -n 'PATTERN' .
```

Use a glob to search only files with a chosen extension:

```sh
rg -n 'PATTERN' --glob '*.EXTENSION' .
```

When you know a file extension but not a filename, list matching files instead
of searching their contents:

```sh
rg --files --glob '*.EXTENSION'
```
