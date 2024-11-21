import {createRouter} from '@/lib/create-api'
import {createRoute, z} from '@hono/zod-openapi'
import {jsonContent} from '@twtchy/handl'

const router = createRouter().openapi(createRoute({
  tags: ['Index'],
  method: 'get',
  path: '/health',
  responses: {
    200: jsonContent(z.object({message: z.string()}), 'twtchy is running smoothly'),
    401: jsonContent(z.object({message: z.string()}), 'Unauthorized')
  }
}), (c) => {
  return c.json({
    message: 'API is healthy'
  }, 200)
})

export default router
