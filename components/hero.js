export default function Hero() {
  return (
    <div className="mb-6 md:mb-8">
      <img
        src="/images/profile.webp"
        className="rounded-full w-16 md:w-24 mb-4"
        alt="Jason Long profile photo"
      />

      <h1 className="font-heading tracking-tight text-4xl sm:text-5xl md:text-6xl font-bold leading-tight dark:text-gray-100">
        Hi. I'm Jason.
      </h1>
      <h2 className="sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400">
        de·sign·erd <span className="text-gray-600 dark:text-gray-500">| \ di-ˈzī-nərd \</span>
      </h2>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-500">
        <span className="italic block">noun</span>
        <span className="ml-4 block">a person who enjoys creating things both visually and with code.</span>
      </p>
    </div>
  )
}
