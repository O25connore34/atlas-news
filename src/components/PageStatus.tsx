import type { ReactNode } from 'react'

type Props = {
  status: 'loading' | 'offline' | 'notfound' | 'ok'
  offlineLabel: string
  retryLabel: string
  notFoundTitle: string
  notFoundHint: string
  homeHref: string
  homeLabel: string
  onRetry: () => void
  children: ReactNode
}

export function PageStatus({
  status,
  offlineLabel,
  retryLabel,
  notFoundTitle,
  notFoundHint,
  homeHref,
  homeLabel,
  onRetry,
  children,
}: Props) {
  if (status === 'loading') {
    return (
      <div className="status" role="status">
        <p className="status__rule" />
        <p className="status__rule status__rule--short" />
      </div>
    )
  }
  if (status === 'offline') {
    return (
      <div className="status" role="alert">
        <p>{offlineLabel}</p>
        <button type="button" className="status__btn" onClick={onRetry}>
          {retryLabel}
        </button>
      </div>
    )
  }
  if (status === 'notfound') {
    return (
      <div className="status" role="status">
        <h1>{notFoundTitle}</h1>
        <p>{notFoundHint}</p>
        <a className="status__btn" href={homeHref}>
          {homeLabel}
        </a>
      </div>
    )
  }
  return <>{children}</>
}
