import { CodeBlock, a11yDark } from 'react-code-blocks'

type CodeProps = {
  /**
   * Code to display in the block.
   */
  children: string
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
  /**
   * Colorize the code appropriately based on the language.
   */
  language: string
}

/**
 * Display a block of code.
 */
const Code = ({ children, className = '', language }: CodeProps) => {
  return (
    <div className={`my-2 rounded shadow ${className}`}>
      <CodeBlock
        customStyle={{ fontFamily: 'monospace' }}
        language={language}
        showLineNumbers={false}
        text={children}
        theme={a11yDark}
      />
    </div>
  )
}
export default Code
