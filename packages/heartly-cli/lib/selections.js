/**
 * Selections
 * Heartly CLI selections
 */

const readPath = process.env.HEARTLY_FILES_READPATH || './files/'

exports.configFiles = [
  {
    name: 'codeowners',
    message: 'Codeowner files (`CODEOWNERS`) provide an easier way to assign code reviews',
    file: `${readPath}CODEOWNERS`,
    dest: '',
  },
  {
    name: 'readme',
    message: 'Readmes provide information developers about what a repository is and what it does',
    file: `${readPath}README.md`,
    dest: '',
  },
  {
    name: 'code-of-conduct',
    message: 'Code of conduct documents provides information about acceptable communication',
    file: `${readPath}CODE_OF_CONDUCT.md`,
    dest: '',
  },
  {
    name: 'license',
    message: 'The license provide law regarding a repositorys use',
    file: `${readPath}LICENSE`,
    dest: '',
  },
  {
    name: 'contributors',
    message: 'The contributor document provides information on how to contribute to a repository',
    file: `${readPath}CONTRIBUTORS.md`,
    dest: '',
  },
  {
    name: 'changelog',
    message: 'The changelog provides information about updates to a repository; usually by release.',
    file: `${readPath}CONTRIBUTORS.md`,
    dest: '',
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
    message: 'Git hooks are run when git commands are run.',
    package: 'husky',
  },
  {
    capability: 'grammar',
    message: 'Grammar checking is important for loving documentation',
    package: 'write-good',
  },
  {
    capability: 'changelog',
    message: 'Changelogs communicate particular updates to webpages—usually during release',
    package: 'conventional-changelog-cli',
  },
]

exports.initGithubTemplateScript = {
  name: 'init-github-templates',
  message: 'The Init Github Templates Script creates initial Github Templates for a Github Repository. Github Templates are templates used by Github for pull requests, issues, and contributing',
  action: ``,
}

exports.initDocsScript = {
  name: 'init-doc-templates',
  message: 'The Init Docs Templates Script creates initial Docs for a Github Repository. Repository documents are markdown and text documents used to provide information, communication expectations, and laws regarding repository use',
  action: ``,
}

exports.initCiScript = {
  name: 'init-ci-setup',
  message: 'The Init Github Templates Script creates a initial .yml file for running Continuous Integration within a Github Repository. Continuous Integration is a process of checking code and repository health in one git branch before it is merged into another git branch.',
  action: ``,
}
