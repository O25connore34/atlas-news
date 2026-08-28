import { useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { PageStatus } from '../components/PageStatus.tsx'
import { StoryCard } from '../components/StoryCard.tsx'
import { isLocale } from '../lib.ts'
import { useApi } from '../useApi.ts'
import type { MetaPayload, SearchPayload } from '../types.ts'

export function SearchPage() {
  const { locale: raw } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const chrome = useOutletContext<MetaPayload | null>()
  const page = useApi<SearchPayload>(
    `/api/${locale}/search?q=${encodeURIComponent(q)}`,
  )
  const ui = chrome?.ui ?? (page.status === 'ok' ? page.data.ui : null)

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
        <section className="section-page">
          <h1 className="section-page__title">
            {ui?.search}
            {q ? `: ${q}` : ''}
          </h1>
          {page.data.articles.length === 0 ? (
            <p>{ui?.noResults}</p>
          ) : (
            <div className="section-page__list">
              {page.data.articles.map((story) => (
                <StoryCard key={story.id} story={story} locale={locale} variant="row" />
              ))}
            </div>
          )}
        </section>
      ) : null}
    </PageStatus>
  )
}
