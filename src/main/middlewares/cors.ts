import { Request, Response, NextFunction } from 'express'
export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('acess-control-allow-origin', '*')
  res.set('acess-control-allow-headers', '*')
  res.set('acess-control-allow-methods', '*')
  next()
}
