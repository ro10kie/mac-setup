---
title: GitHub CLI
description: Manage GitHub repositories, pull requests, and issues from the terminal.
---

[GitHub CLI](https://cli.github.com/), available as `gh`, brings GitHub workflows
to your terminal. Use it to browse repositories, manage pull requests, and read
issues. Install [Git](../foundations/git.md) as well for local version control
and operations such as cloning, committing, and pushing.

## Installation

Install the [Homebrew formula](https://formulae.brew.sh/formula/gh):

```sh
brew install gh
```

Check the installed version:

```sh
gh --version
```

Start the browser-based login flow for GitHub.com:

```sh
gh auth login --hostname github.com --web
```

Choose HTTPS or SSH for Git operations to match your remote URLs, then follow
the browser prompts. This signs the CLI in to GitHub; the author name and email
in your Git configuration are separate settings.

Check your authentication status:

```sh
gh auth status
```

If you use HTTPS and want Git to use your GitHub CLI credentials, configure
`gh` as Git's credential helper for GitHub.com after signing in:

```sh
gh auth setup-git --hostname github.com
```

For SSH remotes, use the SSH key setup in the [Git guide](../foundations/git.md#authenticate-to-github).
See the [authentication reference](https://cli.github.com/manual/gh_auth_login)
for other hosts and login options.

## Usage

Replace `OWNER` with a GitHub user or organization, `REPO` with a repository
name, and `PR_NUMBER` with a pull request number.

Clone a repository from the directory where you want its local copy created:

```sh
gh repo clone OWNER/REPO
```

Run the remaining repository commands from inside the local clone. Open its
GitHub page in your browser:

```sh
gh browse
```

List open pull requests:

```sh
gh pr list
```

Open a specific pull request in your browser:

```sh
gh pr view PR_NUMBER --web
```

After committing and pushing a feature branch, open the browser to prepare a
pull request. Review its base branch, title, and description before submitting:

```sh
gh pr create --web
```

List open issues:

```sh
gh issue list
```

Show available commands:

```sh
gh --help
```

Update the Homebrew-managed CLI:

```sh
brew upgrade gh
```

See the [official manual](https://cli.github.com/manual/) for more commands.
