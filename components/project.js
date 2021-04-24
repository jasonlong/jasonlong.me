import useSWR from 'swr'
import Image from 'next/image'
import StarIcon from './icons/star'

const classNames = require('classnames')

const fetcher = url => fetch(url).then(res => res.json())

export default function Project({ content, dark, reverse }) {
  const { data } = useSWR(
    content.apiUrl,
    fetcher
  )

  return (
    <div className={
      classNames('mb-16 flex flex-col', {
        'md:flex-row': !reverse,
        'md:flex-row-reverse': reverse
      })
     }
    >
      <div className="flex items-center w-full px-8 md:w-1/2">
        <div className={
          classNames('w-full', {
            "bg-white rounded border border-gray-200 dark:border-0": content.imageBorder
          })
         }
        >
          <a href={content.url}>
            {dark && (
              <Image
                src={content.imageSrcDark}
                alt={content.title}
                width={content.imageWidth}
                height={content.imageHeight}
                layout='responsive'
                className={!content.imageBorder ? "rounded" : ""}
              />
            )}
            {!dark && (
              <Image
                src={content.imageSrc}
                alt={content.title}
                width={content.imageWidth}
                height={content.imageHeight}
                layout='responsive'
                className={!content.imageBorder ? "rounded" : ""}
              />
            )}
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full px-8 py-6 text-gray-700 dark:text-gray-500 md:py-0 md:w-1/2">
        <h3 className="text-xl font-bold">
          <a href={content.url}>
            {content.title}
          </a>
        </h3>
        <p>
          {content.description}
        </p>
        <p className="mt-4">
          <StarIcon size={16} />
          <span className="inline-block ml-2 align-middle">{data && data.stargazers_count}</span>
        </p>
      </div>
    </div>
  )
}
