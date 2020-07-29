import Image from './image'
import StarIcon from './icons/star'

const classNames = require('classnames')

export default function Project({ content, dark, reverse }) {
  return (
    <div className={
      classNames('mb-16 flex flex-col', {
        'md:flex-row': !reverse,
        'md:flex-row-reverse': reverse
      })
     }
    >
      <div className="px-8 flex items-center w-full md:w-1/2">
        <div className="p-2 bg-white rounded shadow-md border border-gray-200 dark:border-0">
          {dark && (
            <Image
              src={content.imageSrcDark}
              type={content.imageType}
              alt={content.title}
            />
          )}
          {!dark && (
            <Image
              src={content.imageSrc}
              type={content.imageType}
              alt={content.title}
            />
          )}
        </div>
      </div>
      <div className="text-gray-700 dark:text-gray-500 px-8 py-6 md:py-0 flex flex-col justify-center w-full md:w-1/2">
        <h3 className="font-bold text-xl">
          <a href={content.url}>
            {content.title}
          </a>
        </h3>
        <p>
          {content.description}
        </p>
        <p className="mt-4">
          <StarIcon size={16} />
          <span className="inline-block align-middle ml-2">TODO</span>
        </p>
      </div>
    </div>
  )
}
