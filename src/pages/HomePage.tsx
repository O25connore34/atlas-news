import { Navigate, useOutletContext, useParams } from 'react-router-dom'
import { PageStatus } from '../components/PageStatus.tsx'
import { StoryCard } from '../components/StoryCard.tsx'
import { isLocale } from '../lib.ts'
import type { HomePayload, MetaPayload } from '../types.ts'
import { useApi } from '../useApi.ts'

export function HomePage() {
  const { locale: raw } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const chrome = useOutletContext<MetaPayload | null>()
  const page = useApi<HomePayload>(`/api/${locale}/home`)
  const ui = chrome?.ui

  if (!isLocale(raw)) return <Navigate to="/ru" replace />

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
        <div className="home">
          <section className="front" aria-label={page.data.ui.leadKicker}>
            <StoryCard
              story={page.data.lead}
              locale={locale}
              variant="lead"
              readLabel={page.data.ui.readFull}
            />
            <div className="rail">
              <p className="pack-label">{page.data.ui.latest}</p>
              {page.data.rail.map((story) => (
                <StoryCard key={story.id} story={story} locale={locale} variant="rail" />
              ))}
            </div>
          </section>

          <div className="below">
            <div className="below__main">
              <section className="pack" aria-labelledby="city-pack">
                <h2 id="city-pack" className="pack-label">
                  {page.data.ui.cityPack}
                </h2>
                <div className="pack__grid">
                  {page.data.city.map((story) => (
                    <StoryCard key={story.id} story={story} locale={locale} variant="row" />
                  ))}
                </div>
              </section>

              <section className="pack pack--science" aria-labelledby="sci-pack">
                <h2 id="sci-pack" className="pack-label">
                  {page.data.ui.sciencePack}
                </h2>
                {page.data.science.map((story) => (
                  <StoryCard key={story.id} story={story} locale={locale} variant="row" />
                ))}
              </section>

              <section className="pack" aria-labelledby="cul-pack">
                <h2 id="cul-pack" className="pack-label">
                  {page.data.ui.culturePack}
                </h2>
                <div className="pack__split">
                  {page.data.culture.map((story) => (
                    <StoryCard key={story.id} story={story} locale={locale} variant="row" />
                  ))}
                </div>
              </section>
            </div>

            <aside className="sidebar">
              <section className="briefs" aria-labelledby="briefs">
                <h2 id="briefs" className="pack-label">
                  {page.data.ui.briefsTitle}
                </h2>
                {page.data.briefs.map((item) => (
                  <article key={item.title} className="brief">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </section>

              {page.data.comment ? (
                <section className="comment-rail" aria-labelledby="comment-pack">
                  <h2 id="comment-pack" className="pack-label">
                    {page.data.ui.commentPack}
                  </h2>
                  <StoryCard
                    story={page.data.comment}
                    locale={locale}
                    variant="text"
                  />
                </section>
              ) : null}

              <section className="weather-box" aria-label={page.data.ui.weather}>
                <h2 className="pack-label">{page.data.ui.weather}</h2>
                <ul>
                  {page.data.weather.map((item) => (
                    <li key={item.city}>
                      <b>{item.city}</b>
                      <span className="weather-box__temp">{item.temp}</span>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      ) : null}
    </PageStatus>
  )
}
