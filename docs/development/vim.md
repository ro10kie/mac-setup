---
title: Vim
description: Edit files directly in a terminal
---

[Vim](https://www.vim.org/) is useful for quick edits over SSH or when a graphical editor is unavailable.

## Installation

macOS includes a Vim command. To use the Homebrew release instead, install the [formula](https://formulae.brew.sh/formula/vim):

```sh
brew install vim
```

Check which Vim executable your shell selects:

```sh
command -v vim
```

Check its version:

```sh
vim --version
```

With Homebrew's default Apple Silicon prefix first on `PATH`, `command -v vim` should show `/opt/homebrew/bin/vim`.

## Usage

Open a file, replacing `FILE` with its path:

```sh
vim "FILE"
```

Vim starts in **Normal mode**. Press `i` to enter **Insert mode** and edit the
file. Press **Esc** to return to Normal mode before using the commands below.
Type each command and press **Enter**:

| Command | What it does |
| --- | --- |
| `:w` | Save the file without closing Vim. |
| `:q` | Quit if there are no unsaved changes. |
| `:wq` | Save and quit. |
| `:q!` | Quit and discard unsaved changes. |

For a guided introduction to movement and editing, run Vim's built-in tutor
from the terminal:

```sh
vimtutor
```
