type SubtitleProps = {
  /**
   * Content of the subtitle.
   */
  children: React.ReactNode
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
  /**
   * Whether the subtitle should an <h2> or <h3> tag.
   * The font size is determined by this attribute.
   */
  variants?: 'h2' | 'h3'
}

/**
 * Display a subtitle.
 */
const Subtitle = ({
  children,
  className = '',
  variants = 'h2',
}: SubtitleProps) => {
  if (variants === 'h2')
    return (
      <h2
        className={`m-auto mb-4 max-w-[692px] text-subtitle-2 font-bold ${className}`}
      >
        {children}
      </h2>
    )
  return (
    <h3
      className={`m-auto mb-4 max-w-[692px] text-subtitle-3 font-bold ${className}`}
    >
      {children}
    </h3>
  )
}

export default Subtitle
