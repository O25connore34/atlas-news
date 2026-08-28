import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from './types.ts'

type Slugs = Record<Locale, string>

type Value = {
  slugs: Slugs | null
  setSlugs: (value: Slugs | null) => void
}

const Ctx = createContext<Value | null>(null)

export function ArticleSlugsProvider({ children }: { children: ReactNode }) {
  const [slugs, setSlugs] = useState<Slugs | null>(null)
  const value = useMemo(() => ({ slugs, setSlugs }), [slugs])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useArticleSlugs() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('ArticleSlugsProvider missing')
  return ctx
}
