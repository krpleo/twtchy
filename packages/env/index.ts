import type {ZodError} from 'zod'
import {config} from 'dotenv'
import {expand} from 'dotenv-expand'
import {z} from 'zod'

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'trace', 'debug', 'info']).default('info'),
  PORT: z.coerce.number().default(6969),
  TWTCHY_API_KEY: z.string().startsWith('twtchy_'),
  VAL_API_KEY: z.string().optional()
}).refine(env => env.NODE_ENV === 'production' ? !!env.VAL_API_KEY : true)

export type TwtchyEnv = z.infer<typeof EnvSchema>

// eslint-disable-next-line import/no-mutable-exports
let twtchyEnv: TwtchyEnv

try {
  // eslint-disable-next-line node/no-process-env
  twtchyEnv = EnvSchema.parse(process.env)
}
catch (error) {
  const e = error as ZodError
  console.error('❌ Invalid Environment Variables')
  console.error(e.flatten().fieldErrors)
  process.exit(1)
}

export default twtchyEnv
