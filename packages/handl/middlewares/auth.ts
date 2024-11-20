import twtchyEnv from '@twtchy/env'
import {createMiddleware} from 'hono/factory'
import {UNAUTHORIZED as UNAUTHORIZED_MESSAGE} from '../http/message'
import {UNAUTHORIZED} from '../http/status'

const authenticate = createMiddleware(async (c, next) => {
  const API_KEY = c.req.query('API_KEY')

  if (API_KEY !== twtchyEnv.TWTCHY_API_KEY) {
    return c.json({message: UNAUTHORIZED_MESSAGE}, UNAUTHORIZED)
  }
  else {
    await next()
  }
})

export default authenticate
