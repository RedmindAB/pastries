import express from 'express'

import * as PLACEHOLDERController from './PLACEHOLDER.controller'

const PLACEHOLDERRouter = express.Router()

PLACEHOLDERRouter.get('/', PLACEHOLDERController.getPLACEHOLDER)

export default PLACEHOLDERRouter
