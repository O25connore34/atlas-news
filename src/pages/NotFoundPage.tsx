import { Link, useParams } from 'react-router-dom'
import { isLocale } from '../lib.ts'

export function NotFoundPage() {
  const { locale: raw } = useParams()
  const locale = isLocale(raw) ? raw : 'ru'
  const title =
    locale === 'zh'
      ? '本期无此版面'
      : locale === 'ru'
        ? 'Этой полосы в номере нет'
        : 'This page is not in the paper'
  const hint =
    locale === 'zh'
      ? '请核对地址，或返回本期头版。'
      : locale === 'ru'
        ? 'Проверьте адрес или вернитесь к первой полосе выпуска.'
        : 'Check the address or go back to the front page of this edition.'
  const home = locale === 'zh' ? '头版' : locale === 'ru' ? 'На первую' : 'Front page'

  return (
    <div className="status">
      <h1>{title}</h1>
      <p>{hint}</p>
      <Link className="status__btn" to={`/${locale}`}>
        {home}
      </Link>
    </div>
  )
}
