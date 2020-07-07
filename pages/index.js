// import Nav from '../components/nav'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="container flex flex-col pt-32 h-screen text-gray-900 px-6 text-left xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl xl:text-4xl font-bold leading-tight">
          Hi, I'm Jason Long,
        </h1>
        <h2 className="text-2xl sm-text-3xl md:text-4xl xl:text-5xl text-gray-600">
          a product designer at GitHub.
        </h2>
      </div>

      <p className="py-2 text-md md:text-lg font-medium">
        <a href="https://github.com/jasonlong" className="text-blue-600 hover:text-blue-700">GitHub</a>
      </p>
      <p className="py-2 text-md md:text-lg font-medium">
        <a href="https://twitter.com/jasonlong" className="text-blue-600 hover:text-blue-700">Twitter</a>
      </p>
      <p className="py-2 text-md md:text-lg font-medium">
        <a href="mailto:jason@jasonlong.me" className="text-blue-600 hover:text-blue-700">Email</a>
      </p>
    </div>
  )
}
