import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from 'react-icons/ri'

export enum Severity {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

type CalloutProps = {
  /**
   * Displayed text.
   */
  children: string
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
  /**
   * Define what icon to display.
   */
  severity: Severity
}

const iconSeverityMapping = {
  [Severity.Error]: RiCloseCircleFill,
  [Severity.Info]: RiInformationFill,
  [Severity.Warning]: RiErrorWarningFill,
  [Severity.Success]: RiCheckboxCircleFill,
}

/**
 * Display a frame containing an icon and a text.
 * This is used to attract the attention of the reader.
 */
const Callout = ({ children, className = '', severity }: CalloutProps) => {
  const Icon = iconSeverityMapping[severity]

  return (
    <div
      className={`m-auto flex w-full max-w-[692px] gap-4 rounded border p-2 text-mid shadow-lg sm:p-4 ${className}`}
    >
      <span>
        <Icon className="text-subtitle-2" />
      </span>
      <span>{children}</span>
    </div>
  )
}

export default Callout
