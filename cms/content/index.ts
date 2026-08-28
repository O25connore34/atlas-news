import { businessArticles } from './articles-business.ts'
import { cityArticles } from './articles-city.ts'
import { restArticles } from './articles-rest.ts'
import { authors } from './authors.ts'
import { briefs, dateLabels, editionNames, ticker, ui, weather } from './ui.ts'
import type { ArticleRecord } from '../types.ts'

export const articles: ArticleRecord[] = [
  ...businessArticles,
  ...cityArticles,
  ...restArticles,
]

export { authors, briefs, dateLabels, editionNames, ticker, ui, weather }

export const homeLayout = {
  leadId: 'grain-corridor',
  railIds: ['rate-hold', 'yangtze-draft', 'tram-depot'],
  cityIds: ['goods-yard', 'morning-market', 'school-lab'],
  scienceIds: ['arctic-methane'],
  cultureIds: ['museum-cards', 'rehearsal'],
  commentId: 'insurance-comment',
} as const
