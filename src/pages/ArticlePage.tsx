import { useEffect } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { useArticleSlugs } from '../ArticleSlugs.tsx'
import { ArticleBody } from '../components/ArticleBody.tsx'
import { PageStatus } from '../components/PageStatus.tsx'
import { StoryCard } from '../components/StoryCard.tsx'
import { formatClock, isLocale } from '../lib.ts'
import type { ArticlePayload, MetaPayload } from '../types.ts'
import { useApi } from '../useApi.ts'

export function ArticlePage() {
  const { locale: raw, slug } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const chrome = useOutletContext<MetaPayload | null>()
  const { setSlugs } = useArticleSlugs()
  const page = useApi<ArticlePayload>(
    slug ? `/api/${locale}/articles/${encodeURIComponent(slug)}` : null,
  )
  const ui = chrome?.ui

  useEffect(() => {
    if (page.status !== 'ok') return
    document.title = `${page.data.headline} — ${ui?.masthead ?? 'ATLAS'}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', page.data.dek)
    setSlugs(page.data.slugs)
    return () => setSlugs(null)
  }, [page, ui?.masthead, setSlugs])

  return (
    <PageStatus
      status={page.status === 'ok' ? 'ok' : page.status}
      offlineLabel={ui?.offline ?? ''}
      retryLabel={ui?.retry ?? ''}
      notFoundTitle={ui?.notFound ?? ''}
      notFoundHint={ui?.notFoundHint ?? ''}
      homeHref={`/${locale}`}
      homeLabel={ui?.home ?? ''}
      onRetry={() => window.location.reload()}
    >
      {page.status === 'ok' ? (
        <article className="article">
          <p className="kicker">
            <Link to={`/${locale}/section/${page.data.section}`}>
              {page.data.kicker}
            </Link>
          </p>
          <h1 className="article__headline">{page.data.headline}</h1>
          <p className="article__dek">{page.data.dek}</p>
          <p className="article__byline">
            <span>
              {ui?.bylinePrefix}{' '}
              <Link to={`/${locale}/author/${page.data.authorId}`}>
                {page.data.authorName}
              </Link>
              <span className="article__role">, {page.data.authorTitle}</span>
            </span>
            <span>
              {page.data.dateline}
              <span aria-hidden="true"> · </span>
              <time dateTime={page.data.publishedAt}>
                {formatClock(page.data.publishedAt, locale)}
              </time>
              <span aria-hidden="true"> · </span>
              {page.data.readingMinutes} {ui?.minutes}
              <span aria-hidden="true"> · </span>
              {ui?.updated} {formatClock(page.data.updatedAt, locale)}
            </span>
          </p>

          {page.data.image ? (
            <figure className="article__figure">
              <img
                src={page.data.image}
                alt={page.data.alt}
                width={page.data.imageW}
                height={page.data.imageH}
                style={{
                  aspectRatio: `${page.data.imageW} / ${page.data.imageH}`,
                }}
              />
              {page.data.caption ? <figcaption>{page.data.caption}</figcaption> : null}
            </figure>
          ) : null}

          <div className="article__layout">
            <ArticleBody body={page.data.body} />
            <aside className="article__aside">
              <Link className="author-card" to={`/${locale}/author/${page.data.authorId}`}>
                <img
                  src={page.data.authorPhoto}
                  alt=""
                  width={80}
                  height={80}
                />
                <div>
                  <p className="author-card__name">{page.data.authorName}</p>
                  <p>{page.data.authorTitle}</p>
                  <p>{page.data.authorBio}</p>
                </div>
              </Link>
            </aside>
          </div>

          {page.data.related.length > 0 ? (
            <section className="related" aria-labelledby="related">
              <h2 id="related" className="pack-label">
                {ui?.related}
              </h2>
              <div className="related__grid">
                {page.data.related.map((story) => (
                  <StoryCard key={story.id} story={story} locale={locale} variant="row" />
                ))}
              </div>
            </section>
          ) : null}
        </article>
      ) : null}
    </PageStatus>
  )
}
