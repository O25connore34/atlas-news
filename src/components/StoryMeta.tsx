import { Link } from 'react-router-dom'
import type { Teaser } from '../types.ts'
import { formatClock } from '../lib.ts'
import type { Locale } from '../types.ts'

type Props = {
  story: Teaser
  locale: string
}

export function StoryMeta({ story, locale }: Props) {
  return (
    <p className="story__meta">
      <Link to={`/${locale}/author/${story.authorId}`}>{story.authorName}</Link>
      <span aria-hidden="true"> · </span>
      <span>{story.dateline}</span>
      <span aria-hidden="true"> · </span>
      <time dateTime={story.publishedAt}>
        {formatClock(story.publishedAt, locale as Locale)}
      </time>
      <span aria-hidden="true"> · </span>
      <span>
        {story.readingMinutes}{' '}
        {locale === 'zh' ? '分钟' : locale === 'ru' ? 'мин' : 'min'}
      </span>
    </p>
  )
}
