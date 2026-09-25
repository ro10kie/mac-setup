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
20 or newer. From the repository root, build the site and serve it locally:

```sh
npm ci
npm run build
mkdir -p /tmp/mac-setup-preview
ln -sfn "$PWD/build" /tmp/mac-setup-preview/mac-setup
python3 -m http.server 3000 --bind 127.0.0.1 --directory /tmp/mac-setup-preview
```

Open <http://127.0.0.1:3000/mac-setup/> in a browser. After editing the
guide, run `npm run build` again and refresh the page. Stop the server with
Ctrl+C.

## Credits

This fork adapts [Sourabh Bajaj's macOS Setup
Guide](https://sourabhbajaj.com/mac-setup/). The original project and this
adaptation are licensed under the [MIT License](LICENSE).
