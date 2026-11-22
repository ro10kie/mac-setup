# macOS Setup Guide

A development setup guide for Apple Silicon Macs. The sections group core
setup, languages and build tools, development applications, and terminal
utilities. Each tool has its own installation and usage page.

**Install only what you need.** Choose tools that support the work you plan to
do, and keep project dependencies with their projects.

The guide has four sections: System & Core Development Setup, Languages &
Build Tools, Development Tools & Apps, and CLI & Terminal Utilities. Open the
site to browse their individual tool pages from the sidebar.

## Preview the site

This repository uses [Docusaurus](https://docusaurus.io/) and requires Node.js
20 or newer. From the repository root, install dependencies once (and again
when the lockfile changes):

```sh
npm ci
```

Build the site:

```sh
npm run build
```

Serve the build locally:

```sh
npm run serve
```

Open <http://localhost:3000/mac-setup/> in a browser. After editing the guide,
run `npm run build` again and refresh the page. Stop the server with Ctrl+C.

## Credits

This fork adapts [Sourabh Bajaj's macOS Setup
Guide](https://sourabhbajaj.com/mac-setup/). The original project and this
adaptation are licensed under the [MIT License](LICENSE).
