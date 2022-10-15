type ImageProps = {
  /**
   * `alt` HTML attribute of <img> tag.
   */
  alt: string
  /**
   * Text to display below the image in order to give more details.
   */
  caption?: string | React.ReactNode
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
  /**
   * Source url of the image.
   */
  src: string
}

/**
 * Display an image and optionally a caption to describe it.
 */
const Image = ({ alt, caption, className = '', src }: ImageProps) => {
  return (
    <figure className={`${className}`}>
      <img src={src} alt={alt} className="m-auto" />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  )
}

export default Image
