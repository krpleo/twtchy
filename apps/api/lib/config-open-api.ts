import type {BaseAPI} from '@/lib/create-api'

import packageJSON from '@/package.json'

const configOpenAPI = (api: BaseAPI) => {
  api.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: packageJSON.name
    }
  })
}

export default configOpenAPI
