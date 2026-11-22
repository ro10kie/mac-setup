---
title: Claude Code
description: Work with Anthropic's coding agent from the terminal.
---

[Claude Code](https://code.claude.com/docs/en/quickstart) is Anthropic's coding
agent. Use its CLI to understand a project, edit code, and run development
commands from your terminal.

## Installation

Install the [Homebrew cask](https://formulae.brew.sh/cask/claude-code):

```sh
brew install --cask claude-code
```

Homebrew manages the native binary and its updates. This installation does not
require Node.js or a separate global npm package. The `claude-code` cask follows
the stable release channel.

Check the installed version:

```sh
claude --version
```

Open a terminal in your project directory and start Claude Code:

```sh
claude
```

On first use, follow the prompts to authenticate. You need an eligible Claude
subscription, a Claude Console account with API access, or access through a
supported provider. The [official quickstart](https://code.claude.com/docs/en/quickstart)
explains the available account options.

## Usage

Run these commands from the project you want to work on. Replace `PROMPT` with
your task description; keep the quotes so the shell treats it as one argument.

Start an interactive session with an initial task:

```sh
claude "PROMPT"
```

Continue the most recent conversation in the current directory:

```sh
claude --continue
```

Choose an earlier conversation to resume:

```sh
claude --resume
```

Show available commands and options:

```sh
claude --help
```

Homebrew installations do not auto-update by default. Update this installation
through Homebrew:

```sh
brew upgrade --cask claude-code
```

Use [Git](../foundations/git.md) to review changes and save checkpoints as you
work. See the [official setup guide](https://code.claude.com/docs/en/setup)
for installation troubleshooting and other installation methods.
