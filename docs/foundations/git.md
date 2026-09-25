---
title: Git
description: Install Git and manage local and remote source history.
---

[Git](https://git-scm.com/) records changes to source code. Apple's
[Command Line Tools for Xcode](./command-line-tools.md) include Git; installing
the Homebrew formula gives you a Homebrew-managed version.

## Installation

Install Git with Homebrew:

```sh
brew install git
```

Check which Git executable your shell will run:

```sh
command -v git
```

With Homebrew on your `PATH`, this should print `/opt/homebrew/bin/git` on an
Apple Silicon Mac. Check its version:

```sh
git --version
```

Set the author name to record in your commits. Replace `AUTHOR_NAME` with the
name you want to use:

```sh
git config --global user.name "AUTHOR_NAME"
```

Set the author email in the same way, replacing `AUTHOR_EMAIL` with the address
you want attached to commits:

```sh
git config --global user.email "AUTHOR_EMAIL"
```

Review your global Git settings:

```sh
git config --global --list
```

Use an email recognized by your GitHub account if you want GitHub to attribute
commits to you. The name and email identify the author of a commit; they do not
sign you in to GitHub. See the [Git setup guide](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
for configuration details.

## Usage

Run Git commands from a project's directory unless stated otherwise. Uppercase
words such as `FILE`, `BRANCH`, `REMOTE`, `REMOTE_URL`, `COMMIT`, and `MESSAGE`
are placeholders; replace them with your own values.

### Start or copy a repository

Choose one starting point: initialize a local project, or clone a repository
that already exists remotely. Cloning creates a local Git repository and sets
up its remote, so it does not need `git init` afterward.

| Command | What it does |
| --- | --- |
| `git init` | Start tracking the current project directory as a new Git repository. |
| `git clone REMOTE_URL` | Copy an existing remote repository into a new local directory. Run this from the directory where you want the copy created. |

### Review and commit changes

Review changes before committing. Add project-specific generated files and
other files you do not want to track to `.gitignore` before staging them.

| Command | What it does |
| --- | --- |
| `git status` | Show the current branch and which files are untracked, modified, or staged. |
| `git diff` | Show changes to tracked files that have not been staged. |
| `git diff --staged` | Show staged changes that will be included in the next commit. |
| `git add FILE` | Stage changes to one file. |
| `git add -A` | Stage additions, modifications, and deletions throughout the repository; inspect `git status` and `git diff --staged` afterward. |
| `git commit -m "MESSAGE"` | Save the staged changes as a commit with a descriptive message. |
| `git log --oneline` | Show commit history as a compact list. |
| `git show COMMIT` | Show the details and changes in a particular commit. |

### Work with branches

A branch lets you develop a change without moving another branch forward until
you are ready to merge it.

| Command | What it does |
| --- | --- |
| `git branch` | List local branches; the current branch is marked with `*`. |
| `git branch --show-current` | Print the current branch name. |
| `git switch -c BRANCH` | Create a branch and switch to it. |
| `git switch BRANCH` | Switch to an existing local branch. |
| `git merge BRANCH` | Bring the named branch's commits into the current branch; resolve conflicts if Git reports any. |
| `git branch -d BRANCH` | Delete a local branch after its changes have been merged. |

### Connect a local project to GitHub

If the project is not yet a Git repository, run `git init`, stage files, and
make a commit using the commands above. If it is already a Git repository,
keep its existing history. On GitHub, create an **empty** repository with no
initial commit, then copy its HTTPS or SSH URL as `REMOTE_URL`. An empty
remote avoids starting a separate history from your local commits. If you
cloned the repository, it normally already has a remote; check before adding
another one.

Use the commands below from the local repository. `REMOTE` is the short name
you choose for the remote; use the same name in later commands.

| Command | What it does |
| --- | --- |
| `git remote -v` | Show existing remote names and URLs. Run it before adding a remote and again afterward to verify the URL. |
| `git remote add REMOTE REMOTE_URL` | Save the GitHub repository URL under a local remote name. This does not upload code yet. |
| `git remote set-url REMOTE REMOTE_URL` | Change the URL of an existing remote instead of adding a duplicate. Use only if its URL needs updating. |
| `git branch --show-current` | Check the local branch name you intend to publish. |
| `git branch -m BRANCH` | Optionally rename the current branch before publishing it. Skip this if its name is already the one you want. |
| `git push -u REMOTE BRANCH` | Push the committed branch to GitHub and set its upstream for later `git push` and `git pull` commands. |

You need at least one local commit before the first push. GitHub authentication
is separate from the commit name and email: HTTPS and SSH each require a
supported [authentication method](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).
See GitHub's [guide to adding locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
for the full workflow.

### Keep a repository in sync

Once a branch has an upstream, these commands cover the usual remote workflow:

| Command | What it does |
| --- | --- |
| `git fetch REMOTE` | Download updates from the remote without integrating them into the current branch. |
| `git pull` | Fetch and integrate changes from the current branch's upstream according to your Git configuration. |
| `git push` | Upload local commits on the current branch to its upstream. |

### Correct a mistake

| Command | What it does |
| --- | --- |
| `git restore --staged FILE` | Remove a file from the staging area while keeping its working-directory changes. |
| `git restore FILE` | Discard unstaged changes to a tracked file. Check `git diff` first: these edits will be lost. |
| `git revert COMMIT` | Create a new commit that reverses an earlier commit while preserving the existing history. |

For more commands and options, see the [Git reference](https://git-scm.com/docs).
