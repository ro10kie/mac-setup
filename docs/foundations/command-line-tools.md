---
title: Command Line Tools for Xcode
description: Install Apple's compilers, macOS SDK, and developer command-line tools.
---

The [Command Line Tools for Xcode](https://developer.apple.com/documentation/xcode/installing-the-command-line-tools)
provide the macOS SDK and tools such as `clang`, `xcrun`, and `git`. They are a
useful starting point for compiling native code or installing packages that
must be built from source. The full Xcode app is needed only for work that
requires its IDE or tools that are not in the Command Line Tools package.

## Installation

Open Terminal and request the installer:

```sh
xcode-select --install
```

Complete the macOS installation dialog. If the tools are already installed,
macOS will say so. Verify the active developer directory and the compiler:

```sh
xcode-select -p
clang --version
```

For a Command Line Tools installation, `xcode-select -p` normally prints
`/Library/Developer/CommandLineTools`. It can print an Xcode path if the full
app is installed and selected instead.

## Usage

Use `xcrun` to find the selected toolchain's compiler and SDK without hard
coding their locations:

```sh
xcrun --find clang
xcrun --show-sdk-path
```

You can then compile a C source file with `clang hello.c -o hello` and run the
result with `./hello`. For larger programs and build systems, see
[C / C++](../languages/c-cpp/c-cpp.md) under Languages & Build Tools.
