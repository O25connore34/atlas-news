import type { IncomingMessage, ServerResponse } from 'node:http'
import { handleCmsRequest } from '../cms/query.ts'

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
  const result = handleCmsRequest(url.pathname, url.searchParams)
  if (!result) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ error: 'Unknown endpoint' }))
    return
  }
  res.statusCode = result.status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(result.body))
}
