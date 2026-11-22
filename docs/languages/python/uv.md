---
title: uv
---

[uv](https://docs.astral.sh/uv/) manages Python versions, virtual
environments, project dependencies, and Python command-line tools. Homebrew
installs and updates uv; uv can download Python versions and manage each
project's environment and dependencies.

Although macOS provides an [Apple-managed Python](./python.md), it is intended
for Apple's development tools and may not be the version a project needs. For
project work, prefer uv because it can install the required Python version and
isolate dependencies without changing Apple's interpreter. uv can also use an
existing Python installation; it does not require every interpreter to be
downloaded by uv.

## Installation

Install uv with Homebrew:

```sh
brew install uv
```

Check the installed version:

```sh
uv --version
```

## Usage

### Manage Python versions

Install the Python version required by a project, replacing `PYTHON_VERSION`
with that version:

```sh
uv python install PYTHON_VERSION
```

List the Python versions that uv has installed on this Mac:

```sh
uv python list --only-installed --managed-python
```

### Manage a project

Create a project with the selected Python version. Replace `PYTHON_VERSION`
with the version installed above and `PROJECT_DIRECTORY` with the directory
name:

```sh
uv init --python PYTHON_VERSION PROJECT_DIRECTORY
```

Enter the project directory:

```sh
cd PROJECT_DIRECTORY
```

To change the Python version of an existing project, pin another compatible
version from the project directory. This updates `.python-version`; the version
must also satisfy `requires-python` in `pyproject.toml`:

```sh
uv python pin PYTHON_VERSION
```

Add a dependency, replacing `PACKAGE` with its package name:

```sh
uv add PACKAGE
```

Run a Python script in the project's environment, replacing `SCRIPT_FILE`
with the script's name:

```sh
uv run python SCRIPT_FILE.py
```

`uv init` creates `pyproject.toml`. The first project command that needs an
environment also creates `.venv` and `uv.lock`. Commit `pyproject.toml` and
`uv.lock` with the project; keep `.venv` local.

In an existing uv project, recreate or update the environment from its
project files:

```sh
uv sync
```

Run a command in that environment without activating it manually. Replace
`COMMAND` with the command to run:

```sh
uv run COMMAND
```

Remove a dependency by its package name:

```sh
uv remove PACKAGE
```

See uv's [Python installation guide](https://docs.astral.sh/uv/guides/install-python/)
for more version-management options and its
[project guide](https://docs.astral.sh/uv/guides/projects/) for project files
and commands.
