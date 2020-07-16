export default function SocialMediaIcon({ icon, url }) {
  return (
    <a href={url}>
      <img src={`/images/icons/${icon.toLowerCase()}.svg`} alt={icon} className="w-8 md:w-12 mr-5" />
    </a>
  )
}
