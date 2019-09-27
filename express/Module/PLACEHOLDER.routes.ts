import express from 'express'

import * as PLACEHOLDERController from './PLACEHOLDER.controller'

const PLACEHOLDERRouter = express.Router()

PLACEHOLDERRouter
  .get('/', PLACEHOLDERController.getPASCAL_PLACEHOLDER)
  .post('/', PLACEHOLDERController.createPASCAL_PLACEHOLDER)

PLACEHOLDERRouter
  .get('/:id', PLACEHOLDERController.getPASCAL_PLACEHOLDERById)
  .patch('/:id', PLACEHOLDERController.updatePASCAL_PLACEHOLDER)
  .delete('/:id', PLACEHOLDERController.deletePASCAL_PLACEHOLDER)

export default PLACEHOLDERRouter
