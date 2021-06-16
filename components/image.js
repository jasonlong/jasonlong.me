/* eslint-disable global-require */

export default function Image({ src, type, classes, alt }) {
  return (
    <picture>
      <source srcSet={require(`${src}?webp`)} type="image/webp" />
      <source srcSet={require(`${src}`)} type={type} />
      <img src={require(`${src}`)} className={classes} alt={alt} />
    </picture>
  )
}
