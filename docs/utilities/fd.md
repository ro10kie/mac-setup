---
title: fd
---

[fd](https://github.com/sharkdp/fd) searches for files and directories by name.
It searches recursively from the current directory and is useful when you
remember part of a name but not its exact location. Use
[ripgrep](./ripgrep.md) to search inside files instead.

## Installation

Install fd with Homebrew:

```sh
brew install fd
```

Check the installed version:

```sh
fd --version
```

## Usage

Replace `PATTERN` with part of a file or directory name. Search from the
current directory:

```sh
fd PATTERN
```

Replace `DIRECTORY` with a directory to search only within that location:

```sh
fd PATTERN DIRECTORY
```

Find files with a chosen extension, replacing `EXTENSION` with the extension
without a leading dot:

```sh
fd --extension EXTENSION
```

Show only files whose names match the pattern:

```sh
fd --type f PATTERN
```

fd normally skips hidden paths and files excluded by ignore rules such as
`.gitignore`. Include hidden paths while still respecting ignore rules:

```sh
fd --hidden PATTERN
```
