import { Link, useOutletContext, useParams } from 'react-router-dom'
import { PageStatus } from '../components/PageStatus.tsx'
import { StoryCard } from '../components/StoryCard.tsx'
import { isLocale } from '../lib.ts'
import { useApi } from '../useApi.ts'
import type { AuthorPayload, MetaPayload } from '../types.ts'

export function AuthorPage() {
  const { locale: raw, authorId } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const chrome = useOutletContext<MetaPayload | null>()
  const page = useApi<AuthorPayload>(
    authorId ? `/api/${locale}/authors/${authorId}` : null,
  )
  const ui = chrome?.ui

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
        <section className="author-page">
          <header className="author-page__head">
            <img
              src={page.data.photo}
              alt={page.data.name}
              width={160}
              height={160}
            />
            <div>
              <p className="kicker">{page.data.desk}</p>
              <h1>{page.data.name}</h1>
              <p className="author-page__title">{page.data.title}</p>
              <p>{page.data.bio}</p>
            </div>
          </header>
          <h2 className="pack-label">{ui?.authorAlso}</h2>
          <div className="section-page__list">
            {page.data.articles.map((story) => (
              <StoryCard key={story.id} story={story} locale={locale} variant="row" />
            ))}
          </div>
          <p>
            <Link to={`/${locale}`}>{ui?.home}</Link>
          </p>
        </section>
      ) : null}
    </PageStatus>
  )
}
