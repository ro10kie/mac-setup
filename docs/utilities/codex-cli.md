---
title: Codex CLI
description: Work with OpenAI's coding agent from the terminal.
---

[Codex CLI](https://developers.openai.com/codex/cli/) is OpenAI's terminal
coding agent. Use it to explore a codebase, make changes, and run project tools
from a local working directory.

## Installation

Install the [Homebrew cask](https://formulae.brew.sh/cask/codex):

```sh
brew install --cask codex
```

Homebrew manages the standalone CLI binary. This installation does not require
Node.js or a separate global npm package.

Check the installed version:

```sh
codex --version
```

Open a terminal in your project directory and start Codex:

```sh
codex
```

On first use, follow the prompts to sign in with ChatGPT or another available
authentication method. Then describe a task, such as asking Codex to explain
the project structure.

Check your login status from the shell:

```sh
codex login status
```

## Usage

Run these commands from the project you want to work on. Replace `PROMPT` with
your task description; keep the quotes so the shell treats it as one argument.

Start an interactive session with an initial task:

```sh
codex "PROMPT"
```

Continue the most recent session for the current directory:

```sh
codex resume --last
```

Choose an earlier session to resume:

```sh
codex resume
```

Show available commands and options:

```sh
codex --help
```

Update the Homebrew-managed CLI:

```sh
brew upgrade --cask codex
```

Use [Git](../foundations/git.md) to review changes and save checkpoints as you
work. See the [official CLI guide](https://developers.openai.com/codex/cli/)
for additional workflows and configuration.
