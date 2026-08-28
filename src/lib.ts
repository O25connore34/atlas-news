import { LOCALES, type Locale } from './types.ts'

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

export function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem('atlas-edition')
    if (isLocale(saved ?? '')) return saved as Locale
  } catch {
    /* ignore */
  }
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('zh')) return 'zh'
  if (lang.startsWith('en')) return 'en'
  return 'ru'
}

export function persistLocale(locale: Locale) {
  try {
    localStorage.setItem('atlas-edition', locale)
  } catch {
    /* ignore */
  }
}

export function formatClock(iso: string, locale: Locale): string {
  const date = new Date(iso)
  if (locale === 'ru') {
    return date.toLocaleString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Moscow',
    })
  }
  if (locale === 'zh') {
    return date.toLocaleString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Shanghai',
    })
  }
  return date.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  })
}
