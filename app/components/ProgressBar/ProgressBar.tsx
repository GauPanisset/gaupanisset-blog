type ProgressBarProps = {
  /**
   * Progression value.
   */
  value: number
}

/**
 * Display a progression bar.
 */
const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="flex h-2 w-full gap-[2px]">
      {[...Array.from({ length: 10 }).keys()].map((index) => (
        <span
          key={index}
          className={`h-full grow rounded-sm ${
            index < value / 10 ? 'bg-light' : 'bg-light/50'
          }`}
        />
      ))}
    </div>
  )
}

export default ProgressBar
