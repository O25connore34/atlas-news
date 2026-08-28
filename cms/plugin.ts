import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { handleCmsRequest } from './query.ts'

function sendJson(res: ServerResponse, status: number, body: unknown) {
  const payload = JSON.stringify(body)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(payload)
}

function onRequest(req: IncomingMessage, res: ServerResponse, next: () => void) {
  const url = req.url
  if (!url || !url.startsWith('/api')) {
    next()
    return
  }
  const parsed = new URL(url, 'http://atlas.local')
  const result = handleCmsRequest(parsed.pathname, parsed.searchParams)
  if (!result) {
    next()
    return
  }
  sendJson(res, result.status, result.body)
}

export function atlasCmsPlugin(): Plugin {
  return {
    name: 'atlas-cms',
    configureServer(server) {
      server.middlewares.use(onRequest)
    },
    configurePreviewServer(server) {
      server.middlewares.use(onRequest)
    },
  }
}
