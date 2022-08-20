type MenuIconProps = {
  className: string
  isOpen: boolean
  onClick: () => void
}

/**
 * Display a clickable hamburger menu icon.
 * It render the right icon according to the `isOpen` props.
 */
const MenuIcon = ({ className, isOpen, onClick }: MenuIconProps) => {
  if (isOpen)
    return (
      <svg
        className={className}
        onClick={onClick}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="24.7487"
          width="35"
          height="4"
          transform="rotate(-45 0 24.7487)"
          fill="white"
        />
        <rect
          x="2.82614"
          y="-0.00231934"
          width="35"
          height="4"
          transform="rotate(45 2.82614 -0.00231934)"
          fill="white"
        />
      </svg>
    )

  return (
    <svg
      className={className}
      onClick={onClick}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="24" height="4" fill="white" />
      <rect x="2" y="12" width="24" height="4" fill="white" />
      <rect x="2" y="20" width="24" height="4" fill="white" />
    </svg>
  )
}

export default MenuIcon
