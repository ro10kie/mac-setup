---
title: Skills
description: Discover and manage reusable instructions for AI coding agents.
---

[Skills](https://skills.sh/) is a command-line tool for discovering and managing
reusable instructions for compatible AI coding agents. A skill describes how
to perform a task and may include supporting scripts, templates, or references.
Choose skills that help with the work you need your agent to do.

## Installation

Install the [Homebrew formula](https://formulae.brew.sh/formula/skills):

```sh
brew install skills
```

Homebrew also installs Node.js as a runtime dependency for the CLI. You can
continue using [fnm](../languages/nodejs/fnm.md) to select Node.js versions for
your development projects.

Check the installed CLI version:

```sh
skills --version
```

Show the available commands and options:

```sh
skills --help
```

## Usage

Run project-level commands from the project's root directory. Uppercase words
are placeholders: `QUERY` is a search phrase, `SOURCE` is a skill source, and
`SKILL_NAME` is a skill's name. A source can be a GitHub repository in
`OWNER/REPO` format, a Git repository URL, or a local directory.

### Discover skills

Search for skills by keyword:

```sh
skills find "QUERY"
```

List the skills available from a source before installing any of them:

```sh
skills add SOURCE --list
```

### Add skills

Start an interactive installation from a source. Follow the prompts to choose
the skills and target coding agents:

```sh
skills add SOURCE
```

Skills are installed for the current project by default. To select one skill
from that source, replace `SKILL_NAME` with a name from its listing:

```sh
skills add SOURCE --skill SKILL_NAME
```

For a skill you want available across projects, install it at user level with
`--global`:

```sh
skills add SOURCE --skill SKILL_NAME --global
```

Choose project scope for instructions that belong to one repository, and
global scope for instructions you want to reuse across projects. After
installation, use the skill through the selected coding agent; activation
depends on that agent's support for skills.

### List and remove skills

List skills installed for the current project:

```sh
skills list
```

List skills installed at user level:

```sh
skills list --global
```

Remove a skill from the current project:

```sh
skills remove SKILL_NAME
```

Remove a skill from the global installation:

```sh
skills remove SKILL_NAME --global
```

### Update installed skills

Update skills installed for the current project:

```sh
skills update --project
```

Update skills installed at user level:

```sh
skills update --global
```

These commands update installed skill content from its sources. For additional
options and supported source formats, see the
[official CLI reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).
