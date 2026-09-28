---
title: R
---

[R](https://www.r-project.org/) is a language and environment for statistical
computing and graphics. Homebrew's [R cask](https://formulae.brew.sh/cask/r-app)
installs the R project's native macOS package, including the R framework and
the R GUI application. This is the standard R installation that RStudio finds
on macOS.

## Installation

Install R with Homebrew:

```sh
brew install --cask r-app
```

Check the installed version:

```sh
R --version
```

Check the architecture reported by R:

```sh
Rscript -e 'print(R.version$arch)'
```

Homebrew also provides a separate [R formula](https://formulae.brew.sh/formula/r)
without the R GUI application. This guide uses the `r-app` cask to keep the
standard R framework installation for RStudio.

Install [RStudio](../development/rstudio.md) separately if you want a desktop
IDE. Install R before opening RStudio.
