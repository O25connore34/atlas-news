import { useEffect, useState } from 'react'

type State<T> =
  | { status: 'loading' }
  | { status: 'ok'; data: T }
  | { status: 'notfound' }
  | { status: 'offline' }

export function useApi<T>(path: string | null) {
  const [state, setState] = useState<State<T>>({ status: 'loading' })

  useEffect(() => {
    if (!path) {
      setState({ status: 'notfound' })
      return
    }
    let gone = false
    setState({ status: 'loading' })
    fetch(path)
      .then(async (response) => {
        if (gone) return
        if (response.status === 404) {
          setState({ status: 'notfound' })
          return
        }
        if (!response.ok) {
          setState({ status: 'offline' })
          return
        }
        const data = (await response.json()) as T
        if (!gone) setState({ status: 'ok', data })
      })
      .catch(() => {
        if (!gone) setState({ status: 'offline' })
      })
    return () => {
      gone = true
    }
  }, [path])

  return state
}
