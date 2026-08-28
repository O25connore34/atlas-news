import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useArticleSlugs } from '../ArticleSlugs.tsx'
import { isLocale, persistLocale } from '../lib.ts'
import type { Locale, MetaPayload, SectionId } from '../types.ts'
import { LOCALES } from '../types.ts'
import { useApi } from '../useApi.ts'
import { MastheadMark } from './MastheadMark.tsx'

const SECTION_ORDER: SectionId[] = [
  'politics',
  'business',
  'city',
  'science',
  'culture',
  'comment',
]

export function Layout() {
  const { locale: raw } = useParams()
  const locale = isLocale(raw) ? raw : undefined
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const { slugs } = useArticleSlugs()
  const meta = useApi<MetaPayload>(locale ? `/api/${locale}/meta` : null)

  const editionHref = useMemo(() => {
    return (next: Locale) => {
      if (!locale) return `/${next}`
      if (location.pathname.includes('/article/') && slugs?.[next]) {
        return `/${next}/article/${slugs[next]}`
      }
      const section = location.pathname.match(/\/section\/([^/]+)/)
      if (section) return `/${next}/section/${section[1]}`
      const author = location.pathname.match(/\/author\/([^/]+)/)
      if (author) return `/${next}/author/${author[1]}`
      if (location.pathname.includes('/search')) return `/${next}`
      return `/${next}`
    }
  }, [locale, location.pathname, slugs])

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!locale) return
    const data = new FormData(event.currentTarget)
    const q = String(data.get('q') ?? '').trim()
    if (!q) return
    navigate(`/${locale}/search?q=${encodeURIComponent(q)}`)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!locale) return
    document.documentElement.lang = locale
    persistLocale(locale)
  }, [locale])

  useEffect(() => {
    if (meta.status !== 'ok') return
    if (!location.pathname.includes('/article/')) {
      document.title = `${meta.data.ui.masthead} · ${meta.data.ui.edition}`
      const desc = document.querySelector('meta[name="description"]')
      desc?.setAttribute('content', meta.data.ui.tagline)
    }
  }, [meta, location.pathname])

  if (!locale) {
    return <Navigate to="/ru" replace />
  }

  const ui = meta.status === 'ok' ? meta.data.ui : null

  return (
    <div className="sheet">
      <a className="skip" href="#page">
        {ui?.skip ?? 'Skip'}
      </a>
      <header className="top">
        {meta.status === 'ok' ? (
          <div className="ticker" aria-label={meta.data.ui.markets}>
            <span className="ticker__label">{meta.data.ui.markets}</span>
            <ul>
              {meta.data.ticker.map((item) => (
                <li key={item.label}>
                  <b>{item.label}</b> {item.value}{' '}
                  <span className={item.up ? 'chg chg--up' : 'chg chg--down'}>
                    {item.change}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="ticker ticker--empty" />
        )}

        <div className="masthead">
          <div className="masthead__meta">
            <p className="masthead__volume">{ui?.volume}</p>
            <p className="masthead__date">{meta.status === 'ok' ? meta.data.dateLabel : ''}</p>
            <p className="masthead__lock">{ui?.todayLock}</p>
          </div>
          <Link className="masthead__brand" to={`/${locale}`} onClick={() => persistLocale(locale)}>
            <MastheadMark className="masthead__mark" title={ui?.masthead ?? 'ATLAS'} />
            <div>
              <p className="masthead__word">{ui?.masthead ?? 'ATLAS'}</p>
              <p className="masthead__sub">
                {ui?.mastheadSub} · {ui?.edition}
              </p>
            </div>
          </Link>
          <div className="masthead__editions">
            <p className="masthead__editions-label">{ui?.editionsLabel}</p>
            <ul>
              {LOCALES.map((item) => (
                <li key={item}>
                  <Link
                    to={editionHref(item)}
                    aria-current={item === locale ? 'page' : undefined}
                    onClick={() => persistLocale(item)}
                    lang={item}
                  >
                    {item === 'ru' ? 'Русская' : item === 'en' ? 'English' : '中文'}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="masthead__menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? ui?.closeMenu ?? 'Close' : ui?.search ?? 'Search'}
            </button>
          </div>
        </div>

        <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label={ui?.menu}>
          <ul className="nav__sections">
            {SECTION_ORDER.map((id) => (
              <li key={id}>
                <NavLink
                  to={`/${locale}/section/${id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {ui?.sections[id] ?? id}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="nav__search" role="search" onSubmit={onSearch}>
            <label htmlFor="q">{ui?.search}</label>
            <input
              id="q"
              name="q"
              type="search"
              placeholder={ui?.searchPlaceholder}
              autoComplete="off"
            />
            <button type="submit">{ui?.searchSubmit}</button>
          </form>
        </nav>
      </header>

      <main id="page" className="page">
        <Outlet context={meta.status === 'ok' ? meta.data : null} />
      </main>

      <footer className="site-foot">
        <div className="site-foot__grid">
          <div>
            <p className="site-foot__brand">
              <MastheadMark className="masthead__mark masthead__mark--foot" />
              {ui?.publisher}
            </p>
            <p>{ui?.address}</p>
            <p>{ui?.imprint}</p>
            <p>{ui?.issn}</p>
          </div>
          <div>
            <p>{ui?.footerDesk}</p>
            <p>{ui?.correction}</p>
            <p>{ui?.tagline}</p>
          </div>
          {ui ? (
            <form className="subscribe" onSubmit={(event) => event.preventDefault()}>
              <p className="subscribe__title">{ui.subscribe}</p>
              <p>{ui.subscribeHint}</p>
              <p className="subscribe__price">{ui.subscribePrice}</p>
              <label htmlFor="sub-mail">
                {locale === 'zh' ? '邮箱' : locale === 'ru' ? 'Почта' : 'Email'}
              </label>
              <input id="sub-mail" type="email" name="email" autoComplete="email" />
              <button type="submit">
                {locale === 'zh' ? '登记' : locale === 'ru' ? 'Оставить заявку' : 'Put me down'}
              </button>
            </form>
          ) : null}
        </div>
      </footer>
    </div>
  )
}
