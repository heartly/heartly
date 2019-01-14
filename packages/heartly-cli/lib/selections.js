/**
 * Selections
 * Heartly CLI selections
 */

// exports.features = [
//   {
//     message: 'The Code of Conduct provides information about how to contribute to a repository',
//     name: 'code-of-conduct',
//     options: ['default'],
//   },
//   {
//     message: 'Codeowner files (`CODEOWNERS`) provide an easier way to assign code reviews',
//     name: 'codeowners',
//     options: ['default'],
//   },
//   {
//     message: 'Script are commands that can be run via npm to do something, like lint or test',
//     name: 'npm-scripts',
//     options: ['default'],
//   },
//   {
//     message: 'Github Templates are use to communicate to developers what is expected for code reviews and issues',
//     name: 'github-templates',
//     options: ['default'],
//   },
//   {
//     message: 'Readmes provide information developers about what a repository is and what it does',
//     name: 'readme',
//     options: ['default'],
//   },
//   {
//     message: 'Continuous integration helps developers test code',
//     name: 'continuous-integration',
//     options: ['default'],
//   },
// ]

exports.path = process.env.HEARTLY_FILES_PATH || './files/'

exports.configFiles = [
  {
    name: 'codeowners',
    message: 'Codeowner files (`CODEOWNERS`) provide an easier way to assign code reviews',
    file: `${path}CODEOWNERS`,
  },
  {
    name: 'readme',
    message: 'Readmes provide information developers about what a repository is and what it does',
    file: `${path}README.md`,
  },
]

exports.packages = [
  {
    capability: 'markdown-linting',
    message: 'Markdown linting is used to improve markdown',
    package: 'markdownlint-cli',
  },
  {
    capability: 'markdown-spelling',
    message: 'Markdown spelling is used to improve spelling in markdown files',
    package: 'markdown-spellcheck',
  },
  {
    capability: 'git-hooks',
    message: 'Git hooks are run when ',
    package: 'husky',
  },
  {
    capability: 'grammar',
    package: 'write-good',
  },
  {
    capability: 'changelog',
    package: 'conventional-changelog-cli',
  },
]

exports.githubScript = {
  name: 'github-templates',
  message: 'Github Templates are templates used by Github for pull requests, issues, and contributing',
  action: '',
}
