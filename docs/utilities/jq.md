---
title: jq
---

[jq](https://jqlang.org/) reads, filters, and transforms JSON in the terminal.
It is useful for inspecting API responses, configuration files, and the JSON
output of other command-line tools.

## Installation

Install jq with Homebrew:

```sh
brew install jq
```

Check the installed version:

```sh
jq --version
```

## Usage

Replace `FILE` with a JSON file. Format and print its contents:

```sh
jq '.' FILE
```

Replace `FIELD` with a key in a JSON object. Print that field's value:

```sh
jq '.FIELD' FILE
```

If the field contains a string, print it without JSON quotation marks:

```sh
jq -r '.FIELD' FILE
```

Replace `COMMAND` with a command that outputs JSON, then format its output:

```sh
COMMAND | jq '.'
```

See the [jq manual](https://jqlang.org/manual/) for filters that work with
nested objects, arrays, and more complex transformations.
