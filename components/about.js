import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <div className="w-16 mx-auto mt-12 md:w-20">
        <Image src="/images/profile.jpg" alt="Jason Long" width={192} height={192} className="rounded-full" />
      </div>

      <h2 className="px-8 pb-4 mt-4 font-black text-center text-large md:text-xl dark:text-gray-100">
        I&apos;m a product designer.
      </h2>

      <p className="px-8 mx-auto mb-16 text-base text-center text-gray-700 md:text-xl dark:text-gray-500 md:px-20">
        I live in Columbus, Ohio and I&apos;m helping design next-generation database tools at{' '}
        <a href="https://planetscale.com">PlanetScale</a> . I was previously at{' '}
        <a href="https://github.com">GitHub</a> where I worked on{' '}
        <a href="https://github.com/features/actions">Actions</a>.
      </p>
    </>
  )
}
