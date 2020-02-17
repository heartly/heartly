/**
 * Selections
 * Heartly CLI selections
 * - This file contains config selections
 * - Config Selections are defaults
 */

const {
  // makeDir,
  // makeFile,
  // copyFile,
  installInternalModules
} = require('./helpers')

/**
 * Config Selections
 */

/**
 * paths
 * the variables below provide paths to default config files
 */
const README = require('../../readme-boilerplate/files/DEFAULT_README.md')
const CONTRIBUTING_TEMPLATE = require('../../heartly-github-templates/CONTRIBUTING.md')
const ISSUE_TEMPLATE = require('../../heartly-github-templates/ISSUE_TEMPLATE.md')
const PULL_REQUEST_TEMPLATE = require('../../heartly-github-templates/PULL_REQUEST_TEMPLATE.md')
const CODE_OF_CONDUCT = require('../../heartly-code-of-conduct-boilerplate/CODE_OF_CONDUCT.md')

/**
 * configFiles
 * The configFiles array contains information and references to Heartly CLI's default config files
 */
exports.configFiles = [
  {
    name: 'codeowners',
    message:
      'Codeowner files (`CODEOWNERS`) provide an easier way to assign code reviews',
    file: 'CODEOWNERS',
    dest: ''
  },
  {
    name: 'readme',
    message:
      'Readmes provide information developers about what a repository is and what it does',
    file: README,
    dest: ''
  },
  {
    name: 'code-of-conduct',
    message:
      'Code of conduct documents provides information about acceptable communication',
    file: CODE_OF_CONDUCT,
    dest: ''
  },
  {
    name: 'license',
    message: 'The license provide law regarding a repositorys use',
    file: 'LICENSE',
    dest: ''
  },
  {
    name: 'contributors',
    message:
      'The contributor document provides information on how to contribute to a repository',
    file: CONTRIBUTING_TEMPLATE,
    dest: ''
  },
  {
    name: 'changelog',
    message:
      'The changelog provides information about updates to a repository; usually by release.',
    file: 'CHANGELOG',
    dest: ''
  },
  {
    name: 'issue-template',
    message:
      'The issue template provides a way to create common patterns for creating issues',
    file: ISSUE_TEMPLATE,
    dest: '.github/'
  },
  {
    name: 'pull-request-template',
    message:
      'The pull request template provides a way to create common patterns for creating pull requests',
    file: PULL_REQUEST_TEMPLATE,
    dest: '.github/'
  }
]

/**
 * packages
 * Heartly CLI default packages loaded when a new repository is made
 */
exports.packages = [
  {
    capability: 'markdown-linting',
    message: 'Markdown linting is used to improve markdown',
    package: 'markdownlint-cli'
  },
  {
    capability: 'markdown-spelling',
    message: 'Markdown spelling is used to improve spelling in markdown files',
    package: 'markdown-spellcheck'
  },
  {
    capability: 'git-hooks',
    message: 'Git hooks are run when git commands are run.',
    package: 'husky'
  },
  {
    capability: 'grammar',
    message: 'Grammar checking is important for loving documentation',
    package: 'write-good'
  },
  {
    capability: 'changelog',
    message:
      'Changelogs communicate particular updates to webpages—usually during release',
    package: 'conventional-changelog-cli'
  }
]

/**
 * Selection Actions
 */

/**
 * loadInitialModules
 * @param {packages} array
 */
exports.loadInitialModules = (...packages) => installInternalModules(packages)

/**
 * initGithubTemplateScript
 * initializes default github templates
 */
exports.initGithubTemplateScript = {
  name: 'init-github-templates',
  message:
    'The Init Github Templates Script creates initial Github Templates for a Github Repository. Github Templates are templates used by Github for pull requests, issues, and contributing',
  action: ''
}

/**
 * initDocsScript
 * initializes default docs
 */
exports.initDocsScript = {
  name: 'init-doc-templates',
  message:
    'The Init Docs Templates Script creates initial Docs for a Github Repository. Repository documents are markdown and text documents used to provide information, communication expectations, and laws regarding repository use',
  action: ''
}

/**
 * initCiScript
 * initializes default CI
 */
exports.initCiScript = {
  name: 'init-ci-setup',
  message:
    'The Init Github Templates Script creates a initial .yml file for running Continuous Integration within a Github Repository. Continuous Integration is a process of checking code and repository health in one git branch before it is merged into another git branch.',
  action: ''
}
