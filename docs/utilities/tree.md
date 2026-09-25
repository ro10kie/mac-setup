---
title: tree
---

[`tree`](https://formulae.brew.sh/formula/tree) prints a directory hierarchy.
It is useful for understanding a project's layout without opening every
folder in Finder.

## Installation

Install tree with Homebrew:

```sh
brew install tree
```

Check the installed version:

```sh
tree --version
```

## Usage

Replace `DEPTH` with the number of directory levels to display, and
`IGNORE_PATTERN` with a name or pattern to exclude. Display the current
directory up to the chosen depth:

```sh
tree -L DEPTH
```

Show only directories up to that depth:

```sh
tree -d -L DEPTH
```

Hide paths that match an ignore pattern:

```sh
tree -L DEPTH -I 'IGNORE_PATTERN'
```

Include hidden files in the listing:

```sh
tree -a -L DEPTH
```
