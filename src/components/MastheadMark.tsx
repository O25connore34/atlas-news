type Props = {
  className?: string
  title?: string
}

export function MastheadMark({ className, title = 'ATLAS' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="5.2"
        ry="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path d="M4 16h24" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path d="M16 4v24" fill="none" stroke="#8f2a1f" strokeWidth="1.4" />
    </svg>
  )
}
