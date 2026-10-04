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

Optionally, set the branch name that future `git init` commands will use.
Replace `BRANCH` with the name you want:

```sh
git config --global init.defaultBranch BRANCH
```

This setting does not rename branches in existing repositories.

Review your global Git settings:

```sh
git config --global --list
```

Use an email recognized by your GitHub account if you want GitHub to attribute
commits to you. The name and email identify the author of a commit; they do not
sign you in to GitHub. See the [Git setup guide](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
for configuration details.

### Authenticate to GitHub

Choose SSH or HTTPS before connecting a repository. Use a remote URL that
matches your choice. The commit author settings above are separate from GitHub
authentication.

For SSH, first check whether you already have a key that you can use:

```sh
ls -al ~/.ssh
```

If the directory does not exist, you have no keys there yet. If
`~/.ssh/id_ed25519` does not already exist and you need a new key, generate
one with your GitHub email address:

```sh
ssh-keygen -t ed25519 -C "AUTHOR_EMAIL"
```

When asked where to save the key, press Enter to use the default
`~/.ssh/id_ed25519` path, then set a passphrase. Never overwrite an existing
key. Follow [GitHub's macOS SSH key instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac)
to add the private key to the SSH agent and macOS Keychain.

Copy the **public** key at `~/.ssh/id_ed25519.pub`:

```sh
pbcopy < ~/.ssh/id_ed25519.pub
```

Add that public key in GitHub under **Settings → SSH and GPG keys → New SSH
key**. Keep the private key on your Mac. Then test the connection:

```sh
ssh -T git@github.com
```

On the first connection, compare the displayed host fingerprint with
[GitHub's published fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)
before accepting it. A successful test identifies your GitHub account, even
though `ssh -T` may exit with status 1. See [GitHub's SSH test guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=mac).

If you prefer HTTPS, follow [GitHub's credential setup guide](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git).
GitHub does not accept your account password for Git operations over HTTPS;
use a supported credential method. Never put a token in a remote URL.

## Usage

Run Git commands from a project's directory unless stated otherwise. Uppercase
words such as `FILE`, `BRANCH`, `BASE_BRANCH`, `FEATURE_BRANCH`, `REMOTE`,
`REMOTE_URL`, `COMMIT`, and `MESSAGE` are placeholders; replace them with your
own values.

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

### Ignore local and generated files

Create a `.gitignore` file in the repository root to keep files that should
stay local out of new commits. Add only patterns that fit your project. For
example:

```gitignore
.DS_Store
*.log
node_modules/
.env
```

Here, `*.log` matches log files, `node_modules/` matches directories with that
name, and `.env` is a common place for local settings or secrets. The file
itself should be committed so other contributors use the same patterns. See
the [Git ignore pattern reference](https://git-scm.com/docs/gitignore) for
more pattern rules.

Check which files Git is ignoring:

```sh
git status --ignored --short
```

`.gitignore` applies to untracked files. If a file is already tracked, remove
it from Git's index while keeping the local copy:

```sh
git rm --cached FILE
```

Then stage `.gitignore`, review the staged changes, and commit them using the
commands in [Review and commit changes](#review-and-commit-changes). If a
secret was already committed, this step does not remove it from Git history;
rotate the secret and follow [GitHub's guidance for sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

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

Use this workflow when a project already exists on your Mac and you want to
publish it to a new GitHub repository. Run each command from the project root.
If you cloned the project from GitHub, it normally already has a remote; check
that remote instead of creating a new repository.

1. Check whether the project is already a Git repository:

   ```sh
   git status
   ```

   If Git reports that this is not a repository, initialize it:

   ```sh
   git init
   ```

   If it is already a repository, keep its existing history and skip `git init`.

2. If an existing repository already has a commit and no new changes, skip
   this step. Otherwise, review or create `.gitignore` before staging, so
   local files and secrets are not included. Stage the remaining files:

   ```sh
   git add -A
   ```

   Check the staged file names:

   ```sh
   git status
   ```

   Review the staged changes:

   ```sh
   git diff --staged
   ```

   Commit the staged changes:

   ```sh
   git commit -m "MESSAGE"
   ```

   A new repository needs at least one commit before its first push.

3. On GitHub, create an **empty** repository without a README, `.gitignore`,
   or license. Copy its SSH or HTTPS URL as `REMOTE_URL`, matching the
   authentication method you set up above.

4. Check whether the local repository already has a remote:

   ```sh
   git remote -v
   ```

   If it has no remote for this GitHub repository, add one. `REMOTE` is the
   short name you choose for it:

   ```sh
   git remote add REMOTE REMOTE_URL
   ```

   If that remote already exists but points to the wrong URL, change it only
   when you intend to replace the existing destination:

   ```sh
   git remote set-url REMOTE REMOTE_URL
   ```

   Check the resulting URL before publishing:

   ```sh
   git remote -v
   ```

5. This workflow uses `main` as the branch name on GitHub. Check the current
   local branch name:

   ```sh
   git branch --show-current
   ```

   The initial branch name depends on `init.defaultBranch`; it may be `master`
   or another name. If the current branch is not already `main`, rename it:

   ```sh
   git branch -M main
   ```

   This keeps the branch's existing commits. `-M` forces the rename, so do not
   use it to replace a different local branch already named `main`. See
   [Git's branch reference](https://git-scm.com/docs/git-branch) for details.

   Push `main` to GitHub and set its upstream:

   ```sh
   git push -u REMOTE main
   ```

   Open the repository on GitHub to confirm that your files and commit appear.
   See [GitHub's guide to adding locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
   for more detail.

### Develop and merge a feature branch

Use this workflow in a repository that already has a remote. `BASE_BRANCH` is
the branch you want to merge into, and `FEATURE_BRANCH` is the new branch for
your change. Start with a clean working tree.

1. Switch to the base branch:

   ```sh
   git switch BASE_BRANCH
   ```

   Update it without creating a merge commit; `--ff-only` stops if the local
   and remote histories have diverged:

   ```sh
   git pull --ff-only REMOTE BASE_BRANCH
   ```

2. Create and switch to a feature branch:

   ```sh
   git switch -c FEATURE_BRANCH
   ```

3. After editing files, stage the changes you want to include:

   ```sh
   git add FILE
   ```

   Review the staged changes:

   ```sh
   git diff --staged
   ```

   Commit them with a descriptive message:

   ```sh
   git commit -m "MESSAGE"
   ```

4. Publish the feature branch and set its upstream:

   ```sh
   git push -u REMOTE FEATURE_BRANCH
   ```

5. On GitHub, open a pull request with `FEATURE_BRANCH` as the compare branch
   and `BASE_BRANCH` as the base branch. Review it and merge it on GitHub.
   Then switch back to the local base branch:

   ```sh
   git switch BASE_BRANCH
   ```

   Bring in the merged changes:

   ```sh
   git pull --ff-only REMOTE BASE_BRANCH
   ```

   See [GitHub's pull request guide](https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart)
   for the web steps.

If you can push directly to `BASE_BRANCH`, you can merge locally **instead of**
opening a pull request. After publishing the feature branch in step 4, switch
to the base branch:

```sh
git switch BASE_BRANCH
```

Update it before merging:

```sh
git pull --ff-only REMOTE BASE_BRANCH
```

Merge the feature branch into it:

```sh
git merge FEATURE_BRANCH
```

After resolving any reported conflicts and completing the merge, publish the
updated base branch:

```sh
git push REMOTE BASE_BRANCH
```

Choose either the pull request route or the local merge route for a change;
do not do both.

### Resolve a local merge conflict

When `git merge FEATURE_BRANCH` stops with conflicts, check which files need
attention:

```sh
git status
```

Open each conflicted file. For a conflict within a file, Git marks the two
versions with `<<<<<<<`, `=======`, and `>>>>>>>`. Edit the file into the final
content you want, remove those markers, and save it. A deleted-file conflict
may instead require you to decide whether to keep or delete that file.

Mark each resolved file as ready for the merge:

```sh
git add FILE
```

If you decided to delete a conflicted file, stage that decision instead:

```sh
git rm FILE
```

Check that no unmerged files remain:

```sh
git status
```

Complete the merge after resolving every conflict:

```sh
git merge --continue
```

Git may open an editor for the merge commit message. Check the final status
before pushing. If you want to abandon an unfinished merge instead, run:

```sh
git merge --abort
```

Start a merge with a clean working tree: Git may be unable to restore
uncommitted changes when aborting. See [Git's merge documentation](https://git-scm.com/docs/git-merge)
for details.

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

If you forgot to include a change in your latest commit and have not pushed
that commit yet, stage the change:

```sh
git add FILE
```

Review all staged changes that will be included in the replacement commit:

```sh
git diff --staged
```

Update the latest commit with those staged changes while keeping its message:

```sh
git commit --amend --no-edit
```

`--amend` replaces the latest commit, and `--no-edit` keeps its existing message
without opening an editor. Unstaged changes are not included. Adding these
changes gives the replacement commit a new hash, so use this workflow for
commits you have not pushed. For a commit that is already shared, make a new
commit instead. See [Git's commit reference](https://git-scm.com/docs/git-commit)
for details.

For more commands and options, see the [Git reference](https://git-scm.com/docs).
