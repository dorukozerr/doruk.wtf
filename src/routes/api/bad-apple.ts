import { createFileRoute } from '@tanstack/react-router'
import { env } from 'cloudflare:workers'

export const Route = createFileRoute('/api/bad-apple')({
  server: {
    handlers: {
      GET: async () => {
        const object = await env.WTFDORUK_BUCKET.get('bad-apple.mp3')

        if (!object) return new Response('Audio not found', { status: 404 })

        return new Response(object.body, {
          headers: {
            'Accept-Ranges': 'bytes',
            'Content-Length': object.size.toString(),
            'Content-Type': 'audio/mpeg'
          }
        })
      }
    }
  }
})
