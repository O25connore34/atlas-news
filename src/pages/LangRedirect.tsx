import { Navigate } from 'react-router-dom'
import { detectLocale } from '../lib.ts'

export function LangRedirect() {
  return <Navigate to={`/${detectLocale()}`} replace />
}
