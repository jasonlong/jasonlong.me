/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

export default function Hero() {
  return (
    <div className="mb-6 md:mb-8">
      <picture>
        <source srcSet={require('../public/images/profile.jpg?webp')} type="image/webp" />
        <source srcSet={require('../public/images/profile.jpg?')} type="image/jpeg" />
        <img src={require('../public/images/profile.jpg')} className="rounded-full w-16 md:w-24 mb-4" alt="Jason Long" />
      </picture>

      <h1 className="font-black tracking-tight text-5xl md:text-6xl leading-tight dark:text-gray-100">
        Hi. I&apos;m Jason.
      </h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-400">
        de·sign·erd
        <span className="text-gray-600 dark:text-gray-500">| \ di-ˈzī-nərd \</span>
      </h2>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-500">
        <span className="italic block">noun</span>
        <span className="ml-4 block">a person who enjoys creating things both visually and with code.</span>
      </p>
    </div>
  )
}
