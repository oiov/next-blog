import Script from 'next/script'

const UmamiAnalytics = () => {
  return process.env.UMAMI_ANALYTICS &&
    process.env.NODE_ENV === 'production' ? (
    <Script
      src="https://umami.oiov.dev/script.js"
      data-website-id={process.env.UMAMI_ANALYTICS}
    />
  ) : null
}
export default UmamiAnalytics
