import { Link, useOutletContext, useParams } from 'react-router-dom'
import { PageStatus } from '../components/PageStatus.tsx'
import { StoryCard } from '../components/StoryCard.tsx'
import { isLocale } from '../lib.ts'
import { useApi } from '../useApi.ts'
import type { MetaPayload, SectionPayload } from '../types.ts'

export function SectionPage() {
  const { locale: raw, sectionId } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const chrome = useOutletContext<MetaPayload | null>()
  const page = useApi<SectionPayload>(
    sectionId ? `/api/${locale}/sections/${sectionId}` : null,
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
        <section className="section-page">
          <p className="kicker">
            <Link to={`/${locale}`}>{ui?.home}</Link>
          </p>
          <h1 className="section-page__title">{page.data.title}</h1>
          <div className="section-page__list">
            {page.data.articles.map((story) => (
              <StoryCard key={story.id} story={story} locale={locale} variant="row" />
            ))}
          </div>
        </section>
      ) : null}
    </PageStatus>
  )
}
