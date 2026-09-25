---
title: Java
---

Java development requires a JDK, which includes the `java` runtime and the
`javac` compiler. [Amazon Corretto 25](https://aws.amazon.com/corretto/) and
[Eclipse Temurin 25](https://adoptium.net/) are two OpenJDK distributions
available for Apple Silicon Macs. Choose the distribution that fits your
project; you only need to install one.

## Installation

### Option 1: Amazon Corretto 25

Corretto is Amazon's OpenJDK distribution. Choose it if your project runs on
Corretto in production or your team prefers Amazon's build. Using AWS alone
does not require Corretto; the [AWS SDK for Java](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/setup-java-buildtool.html)
also supports other JDK distributions.

Install it with Homebrew:

```sh
brew install --cask corretto@25
```

### Option 2: Eclipse Temurin 25

Temurin is the Eclipse Adoptium distribution of OpenJDK. Choose it if your
project or team uses Temurin, or if you prefer an Eclipse Adoptium build.

Install it with Homebrew:

```sh
brew install --cask temurin@25
```

### Verify the installation

Check the installed Java runtime version and distribution:

```sh
java --version
```

Check the compiler version:

```sh
javac -version
```

List the installed JDKs that macOS can find and their locations:

```sh
/usr/libexec/java_home -V
```

### Optional: Set `JAVA_HOME` for a tool

Most terminal use does not require `JAVA_HOME`. If a build tool or application
specifically asks for it, set it in the current shell:

```sh
export JAVA_HOME=$(/usr/libexec/java_home -v 25)
```

This lookup assumes you installed one JDK 25 distribution. If you installed
multiple JDKs with the same major version, inspect their paths with
`/usr/libexec/java_home -V`. Set `JAVA_HOME` to the full home path shown for
the JDK you want, replacing `JDK_HOME_PATH`:

```sh
export JAVA_HOME="JDK_HOME_PATH"
```

For more installation details, see the
[Corretto macOS guide](https://docs.aws.amazon.com/corretto/latest/corretto-25-ug/macos-install.html)
or the [Temurin installation guide](https://adoptium.net/installation/).
