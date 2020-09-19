const cameraQuestions = [
  {
    type: 'input',
    name: 'model',
    message: 'Camera Model',
  },
  {
    type: 'input',
    name: 'vendor',
    message: 'Camera Vendor',
  },
  {
    type: 'input',
    name: 'owner',
    message: 'Camera Owner',
  },
  {
    type: 'confirm',
    name: 'highdef',
    message: 'High Definition?',
  },
  {
    type: 'confirm',
    name: 'active',
    message: 'Active?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Camera Location',
  },
]

module.exports = cameraQuestions
