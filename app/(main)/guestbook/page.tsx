import { type Metadata } from 'next'

import { Container } from '~/components/ui/Container'
import { fetchGuestbookMessages } from '~/db/queries/guestbook'

import { Guestbook } from './Guestbook'
import DefaultIcon from '~/assets/icons/DefaultIcon'
import { Card } from '~/components/ui/Card'
import TwikooComment from '~/components/twikoo'

const title = '留言墙'
const description =
  '在这里，你可以留下你想对我说的话，或是你的建议，或是你的想法，或是你的批评，或是你的赞美，或是你的鼓励，或是你的吐槽。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default async function GuestBookPage() {
  const messages = await fetchGuestbookMessages()

  const links = [
    {
      title: "Chaoszhu'Blog",
      url: 'https://chaoszhu.com',
      icon: 'https://chaoszhu.com/avatar.png',
    },
    {
      title: "mggg's Blog",
      url: 'https://mggg.cloud',
      icon: '',
    },
    {
      title: '伴夜',
      url: 'https://www.aitimi.cn',
      icon: 'https://www.aitimi.cn/favicon.ico',
    },
    {
      title: 'royalknight',
      url: 'https://vtron.site/blog/index.html',
      icon: '',
    },
    {
      title: 'lezhi blog',
      url: 'https://zlzzlzlz.github.io',
      icon: '',
    },
    {
      title: "Gholts' Blog",
      url: 'https://blog.gholts.top',
      icon: 'https://avatars.githubusercontent.com/u/104642670?v=4',
    },
    {
      title: 'Rico’s Blog',
      url: 'https://blog.ricocc.com/',
      icon: 'https://blog.ricocc.com/favicon.png',
    },
  ]

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="justify-between gap-6 sm:flex-row md:flex">
        <div className="max-w-2xl">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              欢迎来到我的留言墙
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </header>
          <div className="mt-16 w-full dark:text-white sm:mt-20">
            <TwikooComment />
          </div>
        </div>

        <div className="">
          <h2 className="mb-6 mt-10 text-xl font-bold md:mt-0">我的朋友们</h2>
          <div className="mx-auto mb-10 grid grid-cols-1 gap-4 lg:mx-0">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                className="flex items-center gap-2 text-sm transition-all duration-300 after:text-zinc-500 after:content-['_↗'] hover:opacity-50 dark:text-zinc-200"
              >
                {link.icon ? (
                  <img src={link.icon} alt="avatar" className="h-4 w-4" />
                ) : (
                  <DefaultIcon />
                )}
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
