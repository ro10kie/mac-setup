---
title: Visual Studio Code
description: Edit and debug projects with an extensible code editor
---

[Visual Studio Code](https://code.visualstudio.com/) provides a project explorer, integrated terminal, debugger, and language extensions.

## Installation

Install the [Homebrew cask](https://formulae.brew.sh/cask/visual-studio-code):

```sh
brew install --cask visual-studio-code
```

Open **Visual Studio Code** from Applications. The cask provides a `code` command; check it in a new terminal window:

```sh
code --version
```

If `code` is unavailable, open the Command Palette with **Command-Shift-P** and run **Shell Command: Install 'code' command in PATH**, then restart the terminal. This is the [official macOS setup procedure](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

## Usage

These are default macOS shortcuts. `⌘` means Command, `⇧` means Shift, and
`⌥` means Option. If you have changed your keybindings, use the shortcuts
shown in your own VS Code settings instead.

| Action | Shortcut | What it does |
| --- | --- | --- |
| Find in the current file | `⌘F` | Search the file open in the editor. |
| Search across files | `⇧⌘F` | Find text throughout the open project. |
| Open a file quickly | `⌘P` | Find and open a file by name. |
| Open the Command Palette | `⇧⌘P` | Search for editor commands by name. |
| Format the current document | `⇧⌥F` | Apply an available formatter to the open file. |
| Open Keyboard Shortcuts | `⌘K`, then `⌘S` | Inspect or change the default bindings. |

Formatting requires a formatter for the file's language. If VS Code cannot
format the file, choose a formatter when prompted or install an appropriate
language extension. See the [official keyboard shortcuts reference](https://code.visualstudio.com/docs/reference/default-keybindings)
for more commands.
