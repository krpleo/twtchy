import twtchyEnv from '@twtchy/env'
import {type PinoLogger, pinoLogger} from 'hono-pino'
import pino from 'pino'
import pretty from 'pino-pretty'

const prettyLogger = () => pinoLogger({
  pino: pino({
    level: twtchyEnv.LOG_LEVEL
  }, twtchyEnv.NODE_ENV === 'production' ? undefined : pretty()),
  http: {
    reqId: () => crypto.randomUUID()
  }
})

export {type PinoLogger, prettyLogger}
