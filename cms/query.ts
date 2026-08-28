import {
  articles,
  authors,
  briefs,
  dateLabels,
  editionNames,
  homeLayout,
  ticker,
  ui,
  weather,
} from './content/index.ts'
import { LOCALES, type ArticleRecord, type Locale, type Teaser } from './types.ts'

export { LOCALES, editionNames }
export type { Locale }

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

function readingMinutes(locale: Locale, article: ArticleRecord): number {
  const text = article.locales[locale].body
    .map((block) => {
      if (block.type === 'fact') {
        return block.items.map((item) => `${item.label} ${item.value}`).join(' ')
      }
      return block.text
    })
    .join(' ')

  if (locale === 'zh') {
    const chars = text.replace(/\s/g, '').length
    return Math.max(1, Math.round(chars / 320))
  }
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 140))
}

function toTeaser(locale: Locale, article: ArticleRecord): Teaser {
  const loc = article.locales[locale]
  const author = authors.find((item) => item.id === loc.authorId)
  return {
    id: article.id,
    slug: loc.slug,
    section: article.section,
    sectionLabel: ui[locale].sections[article.section],
    kicker: loc.kicker,
    headline: loc.headline,
    dek: loc.dek,
    image: article.image,
    imageW: article.imageW,
    imageH: article.imageH,
    alt: loc.alt,
    authorId: loc.authorId,
    authorName: author?.names[locale] ?? loc.authorId,
    publishedAt: article.publishedAt,
    readingMinutes: readingMinutes(locale, article),
    dateline: loc.dateline,
  }
}

function byId(id: string): ArticleRecord | undefined {
  return articles.find((article) => article.id === id)
}

function relatedFor(locale: Locale, article: ArticleRecord): Teaser[] {
  return articles
    .filter((item) => item.id !== article.id && item.section === article.section)
    .slice(0, 3)
    .map((item) => toTeaser(locale, item))
}

export function getEditions() {
  return {
    locales: LOCALES.map((locale) => ({
      locale,
      name: editionNames[locale],
      masthead: ui[locale].masthead,
      edition: ui[locale].edition,
    })),
  }
}

export function getMeta(locale: Locale) {
  return {
    locale,
    dateLabel: dateLabels[locale],
    ui: ui[locale],
    ticker: ticker[locale],
    weather: weather[locale],
    editions: getEditions().locales,
  }
}

export function getHome(locale: Locale) {
  const lead = byId(homeLayout.leadId)
  if (!lead) throw new Error('Lead article missing')
  const comment = byId(homeLayout.commentId)
  return {
    locale,
    dateLabel: dateLabels[locale],
    ui: ui[locale],
    ticker: ticker[locale],
    weather: weather[locale],
    lead: toTeaser(locale, lead),
    rail: homeLayout.railIds.map((id) => toTeaser(locale, byId(id)!)),
    city: homeLayout.cityIds.map((id) => toTeaser(locale, byId(id)!)),
    science: homeLayout.scienceIds.map((id) => toTeaser(locale, byId(id)!)),
    culture: homeLayout.cultureIds.map((id) => toTeaser(locale, byId(id)!)),
    comment: comment ? toTeaser(locale, comment) : null,
    briefs: briefs[locale],
  }
}

export function getArticle(locale: Locale, slug: string) {
  const article = articles.find((item) => item.locales[locale].slug === slug)
  if (!article) return null
  const loc = article.locales[locale]
  const author = authors.find((item) => item.id === loc.authorId)
  const teaser = toTeaser(locale, article)
  return {
    ...teaser,
    caption: loc.caption,
    body: loc.body,
    authorTitle: author?.titles[locale] ?? '',
    authorPhoto: author?.photo ?? '',
    authorBio: author?.bios[locale] ?? '',
    updatedAt: article.updatedAt,
    related: relatedFor(locale, article),
    slugs: {
      ru: article.locales.ru.slug,
      en: article.locales.en.slug,
      zh: article.locales.zh.slug,
    },
  }
}

export function getSection(locale: Locale, sectionId: string) {
  const copy = ui[locale]
  if (!(sectionId in copy.sections)) return null
  const list = articles
    .filter((item) => item.section === sectionId)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((item) => toTeaser(locale, item))
  return {
    id: sectionId,
    title: copy.sections[sectionId as keyof typeof copy.sections],
    ui: copy,
    articles: list,
  }
}

export function getAuthor(locale: Locale, authorId: string) {
  const author = authors.find((item) => item.id === authorId)
  if (!author) return null
  const list = articles
    .filter((item) => item.locales[locale].authorId === authorId)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((item) => toTeaser(locale, item))
  return {
    id: author.id,
    name: author.names[locale],
    title: author.titles[locale],
    bio: author.bios[locale],
    desk: author.desks[locale],
    photo: author.photo,
    articles: list,
  }
}

export function searchArticles(locale: Locale, query: string) {
  const q = query.trim().toLowerCase()
  const copy = ui[locale]
  if (!q) {
    return { query: '', ui: copy, articles: [] as Teaser[] }
  }
  const list = articles
    .filter((item) => {
      const loc = item.locales[locale]
      const author = authors.find((person) => person.id === loc.authorId)
      const hay = [
        loc.headline,
        loc.dek,
        loc.kicker,
        loc.dateline,
        author?.names[locale] ?? '',
        copy.sections[item.section],
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
    .map((item) => toTeaser(locale, item))
  return { query, ui: copy, articles: list }
}

export function listArticles(locale: Locale) {
  return articles
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((item) => toTeaser(locale, item))
}

export function handleCmsRequest(pathname: string, searchParams: URLSearchParams) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] !== 'api') return null

  if (parts[1] === 'health') {
    return { status: 200, body: { ok: true, name: 'atlas-cms', locales: LOCALES } }
  }
  if (parts[1] === 'editions') {
    return { status: 200, body: getEditions() }
  }

  const locale = parts[1]
  if (!locale || !isLocale(locale)) {
    return { status: 404, body: { error: 'Unknown edition' } }
  }

  const resource = parts[2]
  const ident = parts[3]

  if (resource === 'meta' && !ident) {
    return { status: 200, body: getMeta(locale) }
  }
  if (resource === 'home' && !ident) {
    return { status: 200, body: getHome(locale) }
  }
  if (resource === 'articles' && !ident) {
    return { status: 200, body: { articles: listArticles(locale) } }
  }
  if (resource === 'articles' && ident) {
    const article = getArticle(locale, ident)
    if (!article) return { status: 404, body: { error: 'Article not found' } }
    return { status: 200, body: article }
  }
  if (resource === 'sections' && ident) {
    const section = getSection(locale, ident)
    if (!section) return { status: 404, body: { error: 'Section not found' } }
    return { status: 200, body: section }
  }
  if (resource === 'authors' && ident) {
    const author = getAuthor(locale, ident)
    if (!author) return { status: 404, body: { error: 'Author not found' } }
    return { status: 200, body: author }
  }
  if (resource === 'search') {
    return { status: 200, body: searchArticles(locale, searchParams.get('q') ?? '') }
  }

  return { status: 404, body: { error: 'Unknown endpoint' } }
}
