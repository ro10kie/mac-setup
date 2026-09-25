---
title: C / C++
---

Apple's Command Line Tools for Xcode include Clang compilers for C and C++
and the macOS SDK. One installation provides both compilers on an Apple
Silicon Mac.

## Installation

Install the Command Line Tools for Xcode:

```sh
xcode-select --install
```

If the tools are already installed, macOS will report that they are present.
Check that the C compiler is available:

```sh
clang --version
```

Check the C++ compiler separately:

```sh
clang++ --version
```

See [Command Line Tools for Xcode](../../foundations/command-line-tools.md)
for more installation details. For projects that use CMake to configure
their builds, continue with [CMake](./cmake.md).
