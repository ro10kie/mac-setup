---
title: Terminal
description: Use the terminal app included with macOS.
---

[Terminal](https://support.apple.com/guide/terminal/welcome/mac) provides a
window for running shell commands. It is an application; [Zsh](./zsh.md) is
the shell that interprets the commands typed inside it.

## Installation

Terminal is included with macOS. There is no separate package to install.

## Usage

Run commands at the shell prompt. Uppercase words such as `DIRECTORY`, `FILE`,
and `COMMAND` are placeholders; replace them with the path or command name you
want to use. A path can be relative to the current directory or absolute.

| Command | What it does |
| --- | --- |
| `pwd` | Show the path of the current directory. |
| `ls` | List files and directories in the current directory. |
| `ls -la` | List entries, including hidden ones, with details such as permissions and sizes. |
| `cd DIRECTORY` | Move to the specified directory. |
| `cd ..` | Move to the parent directory. |
| `cd ~` | Move to your home directory. |
| `open .` | Open the current directory in Finder. |
| `mkdir DIRECTORY` | Create a directory. |
| `touch FILE` | Create an empty file, or update its modification time if it already exists. |
| `cat FILE` | Print a file's contents in Terminal. |
| `cp SOURCE_FILE DESTINATION` | Copy a file to another path or directory. |
| `mv SOURCE DESTINATION` | Move or rename a file or directory. |
| `clear` | Clear the visible Terminal screen without deleting command history. |
| `man COMMAND` | Open the manual page for a command, if one is available. |

Press **Control-C** to stop most running commands. The Up Arrow recalls a
previous command. Apple's [Terminal guide](https://support.apple.com/guide/terminal/welcome/mac)
covers windows, tabs, command execution, and profiles.

## Customization

In **Terminal > Settings > Profiles**, choose a profile to change the terminal's
appearance. Shell behavior and command paths are configured separately in Zsh
startup files.
