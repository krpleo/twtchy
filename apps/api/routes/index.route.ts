import {createRouter} from '@/lib/create-api'
import {createRoute, z} from '@hono/zod-openapi'

const router = createRouter().openapi(createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      },
      description: 'API Health endpoint'
    },
    401: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      },
      description: 'Unauthorized'
    }
  }
}), (c) => {
  return c.json({
    message: 'API is healthy'
  }, 200)
})

export default router
