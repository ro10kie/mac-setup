import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'System & Core Development Setup',
      items: [
        'foundations/command-line-tools',
        {
          type: 'category',
          label: 'Homebrew',
          items: [
            'foundations/homebrew/installation',
            'foundations/homebrew/usage',
            'foundations/homebrew/cask',
          ],
        },
        {
          type: 'category',
          label: 'Terminal',
          items: [
            'foundations/terminal/terminal',
            'foundations/terminal/zsh',
            'foundations/terminal/oh-my-zsh',
          ],
        },
        'foundations/git',
      ],
    },
    {
      type: 'category',
      label: 'Languages & Build Tools',
      items: [
        {
          type: 'category',
          label: 'Python',
          items: [
            'languages/python/python',
            'languages/python/uv',
          ],
        },
        {
          type: 'category',
          label: 'Node.js',
          items: [
            'languages/nodejs/nodejs',
            'languages/nodejs/fnm',
            'languages/nodejs/npm',
          ],
        },
        'languages/java',
        'languages/go',
        {
          type: 'category',
          label: 'C / C++',
          items: [
            'languages/c-cpp/c-cpp',
            'languages/c-cpp/cmake',
          ],
        },
        'languages/r',
      ],
    },
    {
      type: 'category',
      label: 'Development Tools & Apps',
      items: [
        'development/docker',
        'development/visual-studio-code',
        'development/jetbrains-ides',
        'development/sublime-text',
        'development/vim',
        'development/rstudio',
        'development/bruno',
      ],
    },
    {
      type: 'category',
      label: 'CLI & Terminal Utilities',
      items: [
        'utilities/ripgrep',
        'utilities/fd',
        'utilities/fzf',
        'utilities/zoxide',
        'utilities/tree',
        'utilities/jq',
      ],
    },
  ],
};

export default sidebars;
