import {serve} from '@hono/node-server'
import twtchyEnv from '@twtchy/env'
import api from 'twtchy'

const port = Number(twtchyEnv.PORT || 3000)

// eslint-disable-next-line no-console
console.log(`twtchy is running on http://localhost:${port}`)

serve({
  fetch: api.fetch,
  port
})
