import { Link } from 'react-router-dom'
import type { Teaser } from '../types.ts'
import { StoryMeta } from './StoryMeta.tsx'

type Variant = 'lead' | 'rail' | 'row' | 'text'

type Props = {
  story: Teaser
  locale: string
  variant?: Variant
  readLabel?: string
}

export function StoryCard({ story, locale, variant = 'row', readLabel }: Props) {
  const href = `/${locale}/article/${story.slug}`
  const ratio =
    story.image && story.imageW && story.imageH
      ? `${story.imageW} / ${story.imageH}`
      : undefined

  return (
    <article className={`story story--${variant}`}>
      {story.image && variant !== 'text' ? (
        <Link className="story__media" to={href} tabIndex={-1}>
          <img
            src={story.image}
            alt={story.alt}
            width={story.imageW || 1200}
            height={story.imageH || 900}
            style={ratio ? { aspectRatio: ratio } : undefined}
            loading={variant === 'lead' ? 'eager' : 'lazy'}
          />
        </Link>
      ) : null}
      <div className="story__body">
        <p className="kicker">
          <Link to={`/${locale}/section/${story.section}`}>{story.kicker}</Link>
        </p>
        <h2 className="story__headline">
          <Link to={href}>{story.headline}</Link>
        </h2>
        {variant !== 'rail' ? <p className="story__dek">{story.dek}</p> : null}
        <StoryMeta story={story} locale={locale} />
        {readLabel && variant === 'lead' ? (
          <Link className="story__more" to={href}>
            {readLabel}
          </Link>
        ) : null}
      </div>
    </article>
  )
}
