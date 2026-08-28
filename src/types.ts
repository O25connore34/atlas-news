export const LOCALES = ['ru', 'en', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

export type SectionId =
  | 'politics'
  | 'business'
  | 'city'
  | 'science'
  | 'culture'
  | 'comment'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'fact'; items: { label: string; value: string }[] }

export type TickerItem = { label: string; value: string; change: string; up: boolean }
export type WeatherItem = { city: string; temp: string; note: string }
export type Brief = { title: string; text: string }

export type UiCopy = {
  skip: string
  edition: string
  tagline: string
  volume: string
  masthead: string
  mastheadSub: string
  publisher: string
  readFull: string
  updated: string
  bylinePrefix: string
  search: string
  searchPlaceholder: string
  searchSubmit: string
  noResults: string
  latest: string
  leadKicker: string
  markets: string
  weather: string
  subscribe: string
  subscribeHint: string
  subscribePrice: string
  imprint: string
  address: string
  correction: string
  print: string
  related: string
  authorAlso: string
  minutes: string
  menu: string
  closeMenu: string
  home: string
  notFound: string
  notFoundHint: string
  offline: string
  retry: string
  editionsLabel: string
  todayLock: string
  briefsTitle: string
  sciencePack: string
  cityPack: string
  culturePack: string
  commentPack: string
  footerDesk: string
  issn: string
  sections: Record<SectionId, string>
}

export type EditionInfo = {
  locale: Locale
  name: string
  masthead: string
  edition: string
}

export type Teaser = {
  id: string
  slug: string
  section: SectionId
  sectionLabel: string
  kicker: string
  headline: string
  dek: string
  image: string | null
  imageW: number
  imageH: number
  alt: string
  authorId: string
  authorName: string
  publishedAt: string
  readingMinutes: number
  dateline: string
}

export type MetaPayload = {
  locale: Locale
  dateLabel: string
  ui: UiCopy
  ticker: TickerItem[]
  weather: WeatherItem[]
  editions: EditionInfo[]
}

export type HomePayload = MetaPayload & {
  lead: Teaser
  rail: Teaser[]
  city: Teaser[]
  science: Teaser[]
  culture: Teaser[]
  comment: Teaser | null
  briefs: Brief[]
}

export type ArticlePayload = Teaser & {
  caption: string
  body: Block[]
  authorTitle: string
  authorPhoto: string
  authorBio: string
  updatedAt: string
  related: Teaser[]
  slugs: Record<Locale, string>
}

export type SectionPayload = {
  id: SectionId
  title: string
  ui: UiCopy
  articles: Teaser[]
}

export type AuthorPayload = {
  id: string
  name: string
  title: string
  bio: string
  desk: string
  photo: string
  articles: Teaser[]
}

export type SearchPayload = {
  query: string
  ui: UiCopy
  articles: Teaser[]
}
