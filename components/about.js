import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <div className="w-16 md:w-20 mt-12 mx-auto">
        <Image src="/images/profile.jpg" alt="Jason Long" width={192} height={192} className="rounded-full" />
      </div>

      <h2 className="text-center pb-4 px-8 mt-4 text-large md:text-xl font-black dark:text-gray-100">
        I&apos;m a product designer.
      </h2>

      <p className="text-center text-base md:text-xl text-gray-700 dark:text-gray-500 mx-auto px-8 md:px-20 mb-16">
        I live in Columbus, Ohio and work for{' '}
        <a href="https://github.com">GitHub</a>. I&apos;m current working on{' '}
        <a href="https://github.com/features/actions">GitHub Actions</a>, but
        I&apos;ve had the opportunity to work on a wide variety of projects
        since joining in 2012.
      </p>
    </>
  )
}
