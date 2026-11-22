---
title: RStudio
description: Work with R projects, scripts, plots, and data
---

[RStudio Desktop](https://posit.co/downloads/) is an IDE for R. It combines a
script editor, R console, plots, and project tools. Install [R](../languages/r.md)
first; RStudio uses that separate R installation.

## Installation

Check that R is available:

```sh
R --version
```

Install the [Homebrew cask](https://formulae.brew.sh/cask/rstudio):

```sh
brew install --cask rstudio
```

Open **RStudio** from Applications and complete its initial setup. In the
RStudio console, check which R installation it is using:

```r
R.home()
```

If you installed R with the `r-app` cask, this should point to the R framework
under `/Library/Frameworks/R.framework`. See [Posit's R version selection
guide](https://support.posit.co/hc/en-us/articles/200486138-Changing-R-versions-for-the-RStudio-Desktop-IDE)
if RStudio selects a different R installation.
