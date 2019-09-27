import { NextFunction, Response, Request } from 'express'

import * as PLACEHOLDERService from './PLACEHOLDER.service'

export async function getPASCAL_PLACEHOLDER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const PLACEHOLDER = await PLACEHOLDERService.getPASCAL_PLACEHOLDER()
    res.status(200).send(PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}

export async function getPASCAL_PLACEHOLDERById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params
    const PLACEHOLDER = await PLACEHOLDERService.getPASCAL_PLACEHOLDERById(id)
    res.status(200).send(PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}

export async function createPASCAL_PLACEHOLDER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const PLACEHOLDER = req.body
    const createdPASCAL_PLACEHOLDER = await PLACEHOLDERService.createPASCAL_PLACEHOLDER(
      PLACEHOLDER
    )
    res.status(201).send(createdPASCAL_PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}

export async function updatePASCAL_PLACEHOLDER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const PLACEHOLDER = req.body
    const updatedPASCAL_PLACEHOLDER = await PLACEHOLDERService.updatePASCAL_PLACEHOLDER(
      PLACEHOLDER
    )
    res.status(200).send(updatedPASCAL_PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}

export async function deletePASCAL_PLACEHOLDER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.body
    const PLACEHOLDER = await PLACEHOLDERService.deletePASCAL_PLACEHOLDER(id)
    res.status(204).send(PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}
