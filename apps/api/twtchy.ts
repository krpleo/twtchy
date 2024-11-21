import configOpenAPI from '@/lib/config-open-api'
import createApi from '@/lib/create-api'
import index from '@/routes/index.route'

const api = createApi()

const routes = [
  index
]

configOpenAPI(api)

routes.forEach((route) => {
  api.route('/', route)
})

export default api
