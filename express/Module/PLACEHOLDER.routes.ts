import express from 'express'

import * as PLACEHOLDERController from './PLACEHOLDER.controller'

const PLACEHOLDERRouter = express.Router()

PLACEHOLDERRouter.get('/', PLACEHOLDERController.getPASCAL_PLACEHOLDER)

export default PLACEHOLDERRouter
