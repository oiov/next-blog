import Studio from './Studio'

// Keep the Studio shell as a static asset. Nested Studio URLs are rewritten
// here so Vercel never needs to execute a catch-all serverless function.
export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
