const { closeConnection } = require('../db')

const Camera = require('../models/cameraModel')

const addCamera = (camera) => {
  Camera.create(camera)
    .then((camera) => {
      console.info('New Camera Added')
      closeConnection()
    })
    .catch((err) => err && (console.error(err), closeConnection()))
}

const findCamera = (model) => {
  const search = new RegExp(model, 'i')
  Camera.find({
    $or: [{ model: search }, { location: search }],
  })
    .then((camera) => {
      console.info(camera)
      console.info(`${camera.length} matches`)
      closeConnection()
    })
    .catch((err) => err && (console.error(err), closeConnection()))
}

const updateCamera = (_id, camera) => {
  Camera.updateOne({ _id }, camera)
    .then((camera) => {
      console.info('Camera Updated')
      closeConnection()
    })
    .catch((err) => err && (console.error(err), closeConnection()))
}

const removeCamera = (_id) => {
  Camera.deleteOne({ _id })
    .then((camera) => {
      console.info('Camera Removed')
      closeConnection()
    })
    .catch((err) => err && (console.error(err), closeConnection()))
}

const listCameras = () => {
  Camera.find()
    .then((cameras) => {
      console.info(cameras)
      console.info(`${cameras.length} cameras`)
      closeConnection()
    })
    .catch((err) => err && (console.error(err), closeConnection()))
}

module.exports = {
  addCamera,
  findCamera,
  updateCamera,
  removeCamera,
  listCameras,
}
