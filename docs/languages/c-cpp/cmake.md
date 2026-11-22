---
title: CMake
---

[CMake](https://cmake.org/) configures a build from a project's
`CMakeLists.txt` file. It generates build files and can invoke the selected
build tool.

## Installation

Install CMake with Homebrew:

```sh
brew install cmake
```

Check the installed version:

```sh
cmake --version
```

Install a compiler such as Apple's [Clang](./c-cpp.md) and a build tool before
configuring a project that needs them.

## Usage

From the root of an existing project that contains `CMakeLists.txt`, configure
the build with CMake's default generator. Replace `BUILD_DIRECTORY` with a
directory name for generated files:

```sh
cmake -S . -B BUILD_DIRECTORY
```

The `-S` argument names the source directory and `-B` names the generated
build directory. Keep generated files out of version control unless the
project explicitly requires them.

Build with the tool selected during configuration:

```sh
cmake --build BUILD_DIRECTORY
```

To see available CMake options for a project after its initial configuration,
run:

```sh
cmake -S . -B BUILD_DIRECTORY -LAH
```

See the [CMake command-line manual](https://cmake.org/cmake/help/latest/manual/cmake.1.html)
for more options.
