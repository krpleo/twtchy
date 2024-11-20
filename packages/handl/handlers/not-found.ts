import type {NotFoundHandler} from 'hono'
import {NOT_FOUND as NOT_FOUND_MESSAGE} from '../http/message'
import {NOT_FOUND} from '../http/status'

const notFoundHandler: NotFoundHandler = (c) => {
  return c.json({
    message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`
  }, NOT_FOUND)
}

export default notFoundHandler
