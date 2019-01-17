/**
 * Selections
 * Heartly CLI selections
 */

const path = process.env.HEARTLY_FILES_PATH || './files/'

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
  {
    name: 'code-of-conduct',
    message: 'Code of conduct documents provides information about acceptable communication',
    file: `${path}CODE_OF_CONDUCT.md`,
  },
  {
    name: 'license',
    message: 'The license provide law regarding a repositorys use',
    file: `${path}LICENSE`,
  },
  {
    name: 'contributors',
    message: 'The contributor document provides information on how to contribute to a repository',
    file: `${path}CONTRIBUTORS.md`,
  },
  {
    name: 'changelog',
    message: 'The changelog provides information about updates to a repository; usually by release.',
    file: `${path}CONTRIBUTORS.md`,
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

exports.docScript = {
  name: 'doc-templates',
  message: 'Repository documents are markdown and text documents used to provide information, communication expectations, and laws regarding repository use',
  action: '',
}
