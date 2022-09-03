type ParagraphProps = {
  /**
   * Content of the paragraph.
   */
  children: React.ReactNode
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
}

/**
 * Implement the layout constraints of a text paragraph.
 */
const Paragraph = ({ children, className = '' }: ParagraphProps) => {
  return (
    <p className={`m-auto mb-4 max-w-[692px] text-base ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph
