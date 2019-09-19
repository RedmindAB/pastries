import { NextFunction, Response, Request } from 'express'

import * as PLACEHOLDERService from './PLACEHOLDER.service'

export async function getPLACEHOLDER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const PLACEHOLDER = await PLACEHOLDERService.getPLACEHOLDER()
    res.status(200).send(PLACEHOLDER)
  } catch (error) {
    next(error)
  }
}
