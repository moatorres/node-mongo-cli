#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
const {
  addCamera,
  findCamera,
  updateCamera,
  removeCamera,
  listCameras,
} = require('../controllers/cameraController')

const cameraQuestions = require('./cameraInquiry')

program.version('1.0.0').description('CCTV Management System')

program
  .command('add')
  .alias('a')
  .description('Add a camera')
  .action(() => {
    prompt(cameraQuestions).then((answers) => addCamera(answers))
  })

program
  .command('find <model>')
  .alias('f')
  .description('Find a camera')
  .action((model) => findCamera(model))

program
  .command('update <_id>')
  .alias('u')
  .description('Update a camera')
  .action((_id) => {
    prompt(cameraQuestions).then((answers) => updateCamera(_id, answers))
  })

program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a camera')
  .action((_id) => removeCamera(_id))

program
  .command('list')
  .alias('l')
  .description('List all cameras')
  .action(() => listCameras())

program.parse(process.argv)
