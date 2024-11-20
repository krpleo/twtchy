type SuccessStatusCode = 200 | 201 | 202 | 204
type ErrorStatusCode = 400 | 401 | 403 | 404 | 409 | 500

export const OK: SuccessStatusCode = 200

export const NOT_FOUND: ErrorStatusCode = 404

export const UNAUTHORIZED: ErrorStatusCode = 401

export const INTERNAL_SERVER_ERROR: ErrorStatusCode = 500
