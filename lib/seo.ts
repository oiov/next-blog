export const seo = {
  title: 'Oiov | 前端开花者',
  description: '我叫 Oiov，一名前端开花者',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.oiov.dev'
      : 'http://localhost:3000'
  ),
} as const
