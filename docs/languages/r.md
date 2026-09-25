---
title: R
---

[R](https://www.r-project.org/) is a language and environment for statistical
computing and graphics. The R project's macOS installer provides a native
Apple Silicon build.

## Installation

Download the current `arm64` package from the official
[R for macOS page](https://mac.r-project.org/bin/macosx/) and run the package
installer. Check the installed version:

```sh
R --version
```

Check the architecture reported by R:

```sh
Rscript -e 'print(R.version$arch)'
```

Install [RStudio](../development/rstudio.md) separately if you want a desktop
IDE. Install R before opening RStudio.
