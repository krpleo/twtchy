import errorHandler from './handlers/error'
import notFoundHandler from './handlers/not-found'
import authenticate from './middlewares/auth'
import {prettyLogger as logger, type PinoLogger as Logger} from './middlewares/logger'
import defaultHook from './openapi/default-hook'
import jsonContent from './openapi/helpers/json-content'

export {authenticate, defaultHook, errorHandler, jsonContent, logger, type Logger, notFoundHandler}
