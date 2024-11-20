import {config} from 'dotenv'
import {expand} from 'dotenv-expand'
import {z} from 'zod'

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(6969),
  TWTCHY_API_KEY: z.string().startsWith('twtchy_'),
  VAL_API_KEY: z.string()
})

// eslint-disable-next-line node/no-process-env
const twtchyEnv = EnvSchema.parse(process.env)

export default twtchyEnv
