---
title: Python
---

Python is used for scripts, data analysis, and application development. As the
[Python documentation](https://docs.python.org/3/using/mac.html) notes, recent
versions of macOS include `/usr/bin/python3`, which links to an Apple-managed
Python for Xcode or the Command Line Tools for Xcode. This interpreter may be
older or incomplete, so leave it in place for Apple's development tools.

## Installation

There is no need to replace Apple's Python. Check its version explicitly:

```sh
/usr/bin/python3 --version
```

The `python3` command without a full path may refer to a different installation,
depending on your `PATH`. Check which executable your shell selects:

```sh
command -v python3
```

For projects, use [uv](./uv.md) to install the required Python version and
manage dependencies in an isolated environment. This keeps project packages
separate from Apple's Python.
