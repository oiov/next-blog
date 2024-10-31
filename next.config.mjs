/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'gcloud-1303456836.cos.ap-chengdu.myqcloud.com',
      'img.vmail.dev',
      'chaoszhu.com',
      'mggg.cloud',
      'www.aitimi.cn',
      'vtron.site',
      'blog.gholts.top',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.vmail.dev',
      },
      {
        protocol: 'https',
        hostname: 'chaoszhu.com',
      },
      {
        protocol: 'https',
        hostname: 'mggg.cloud',
      },
      {
        protocol: 'https',
        hostname: 'www.aitimi.cn',
      },
      {
        protocol: 'https',
        hostname: 'vtron.site',
      },
      {
        protocol: 'https',
        hostname: 'blog.gholts.top',
      },
    ],
  },

  experimental: {
    taint: true,
  },

  redirects() {
    return [
      {
        source: '/x',
        destination: 'https://x.com/yesmoree',
        permanent: true,
      },
      {
        source: '/tg',
        destination: 'https://t.me/@okJuice',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@yesmore5825',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/oiov',
        permanent: true,
      },
      {
        source: '/bilibili',
        destination: 'https://space.bilibili.com/299717355',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/articles/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/cn/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/archives',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/archives/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/categories/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/blog',
        permanent: true,
      },
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
