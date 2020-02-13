/**
 * Helpers
 * Heartly CLI helper functions
 */
const fs = require('./fs-extra')
const mkdirp = require('./mkdirp')
const { exec } = require('child_process')

/**
 * makeDir
 * @param {directoryName} string
 * makes a directory
 */
exports.makeDir = directoryName =>
  mkdirp(directoryName, err =>
    err ? console.error(err) : console.info(`Made the ${directoryName}`)
  )

/**
 * copyFile
 * @param {fileToBeCopiedLocation} string
 * @param {fileToBeCopiedNewLocation} string
 * copies a file
 */
exports.copyFile = async (
  fileToBeCopiedLocation,
  fileToBeCopiedNewLocation
) => {
  try {
    await fs.copy(fileToBeCopiedLocation, fileToBeCopiedNewLocation)
    console.info(
      `${fileToBeCopiedLocation} was copied to ${fileToBeCopiedNewLocation}`
    )
  } catch (err) {
    console.error(err)
  }
}

/**
 * installInternalModules
 * @param {devDepPackages} array
 */
exports.installInternalModules = (depPackages, devEnv = '-D') =>
  depPackages.forEach(pkg => exec(`npm install ${pkg} ${devEnv}`))

/**
 * makeFile
 * @param {name} string
 * @param {initialText} string
 */
exports.makeFile = (name, initialText) =>
  !name
    ? console.error('HEARTLY: a name is required')
    : exec(`touch ${name} > ${initialText || ''}`)
