'use client'

import React from 'react'

import { type GuestbookDto } from '~/db/dto/guestbook.dto'

import TwikooComment from '~/components/twikoo'

export function Guestbook(props: { messages?: GuestbookDto[] }) {
  return (
    <section className="max-w-2xl">
      <div className="w-full max-w-2xl dark:text-white">
        <TwikooComment />
      </div>
    </section>
  )
}
