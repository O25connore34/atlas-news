export const LOCALES = ['ru', 'en', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

export const SECTION_IDS = [
  'politics',
  'business',
  'city',
  'science',
  'culture',
  'comment',
] as const
export type SectionId = (typeof SECTION_IDS)[number]

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'fact'; items: { label: string; value: string }[] }

export type Localized<T> = Record<Locale, T>

export type AuthorRecord = {
  id: string
  photo: string
  names: Localized<string>
  titles: Localized<string>
  bios: Localized<string>
  desks: Localized<string>
}

export type ArticleLocale = {
  slug: string
  kicker: string
  headline: string
  dek: string
  alt: string
  caption: string
  authorId: string
  dateline: string
  body: Block[]
}

export type ArticleRecord = {
  id: string
  section: SectionId
  publishedAt: string
  updatedAt: string
  image: string | null
  imageW: number
  imageH: number
  locales: Localized<ArticleLocale>
}

export type Brief = { title: string; text: string }

export type TickerItem = { label: string; value: string; change: string; up: boolean }

export type WeatherItem = { city: string; temp: string; note: string }

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

export type ArticlePayload = Teaser & {
  caption: string
  body: Block[]
  authorTitle: string
  authorPhoto: string
  authorBio: string
  updatedAt: string
  related: Teaser[]
}

export type HomePayload = {
  locale: Locale
  dateLabel: string
  ui: UiCopy
  ticker: TickerItem[]
  weather: WeatherItem[]
  lead: Teaser
  rail: Teaser[]
  city: Teaser[]
  science: Teaser[]
  culture: Teaser[]
  comment: Teaser | null
  briefs: Brief[]
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
