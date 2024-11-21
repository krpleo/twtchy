import type {Logger} from '@twtchy/handl'
import {OpenAPIHono} from '@hono/zod-openapi'
import {authenticate, errorHandler, logger, notFoundHandler} from '@twtchy/handl'

export interface ApiBindings {
  Variables: {
    logger: Logger
  }
}

export const createRouter = () => new OpenAPIHono<ApiBindings>({strict: false})

const createApi = () => {
  const api = createRouter()
  // api.use(authenticate)
  api.use(logger())
  api.onError(errorHandler)
  api.notFound(notFoundHandler)

  return api
}

export type BaseAPI = ReturnType<typeof createApi>

export default createApi
