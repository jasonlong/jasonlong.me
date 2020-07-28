/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

import useSWR from 'swr'
import isoPic from '../public/images/projects/isometric-contributions.png?trace'
import materPic from '../public/images/projects/mater.png?trace'
import materDarkPic from '../public/images/projects/mater-dark.png?trace'
import geoPic from '../public/images/projects/geo-light.png?trace'
import geoDarkPic from '../public/images/projects/geo-dark.png?trace'
import TerminalIcon from './terminal-icon'
import StarIcon from './star'

const fetcher = url => fetch(url).then(res => res.json())

export default function Projects({ dark }) {
  const { dataIso } = useSWR(
    'https://api.github.com/repos/jasonlong/isometric-contributions',
    fetcher
  )

  const { dataMater } = useSWR(
    'https://api.github.com/repos/jasonlong/mater',
    fetcher
  )

  const { dataGeo } = useSWR(
    'https://api.github.com/repos/jasonlong/geo_pattern',
    fetcher
  )

  return (
    <>
      <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-16 md:w-20 p-5 md:p-6 text-gray-800 dark:text-gray-200 mx-auto mt-12">
        <TerminalIcon />
      </div>

      <h2 className="text-center pb-4 px-8 mt-4 mb-4 text-large md:text-xl font-black dark:text-gray-100">
        I have a few side projects.
      </h2>

      <div className="mb-16 flex flex-col md:flex-row mb-16">
        <div className="px-8 flex items-center w-full md:w-1/2">
          <picture className="p-2 bg-white rounded shadow-md border border-gray-200 dark:border-0">
            <source
              srcSet={require('../public/images/projects/isometric-contributions.png?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../public/images/projects/isometric-contributions.png')}
              type="image/png"
            />
            <img
              src={isoPic.trace}
              alt="Isometric Contributions browser extension"
            />
          </picture>
        </div>
        <div className="text-gray-700 dark:text-gray-500 px-8 py-6 md:py-0 flex flex-col justify-center w-full md:w-1/2">
          <h3 className="font-bold text-xl">
            <a href="https://github.com/jasonlong/isometric-contributions">
              isometric-contributions
            </a>
          </h3>
          <p>
            A browser extension that allows you view your GitHub contribution
            graph in 3D. Available for Chrome, Brave, and Firefox.
          </p>
          <p className="mt-4">
            <StarIcon size={16} />
            <span className="inline-block align-middle ml-2">
              {dataIso && dataIso.stargazers_count}
            </span>
          </p>
        </div>
      </div>

      <div className="mb-16 flex flex-col md:flex-row-reverse mb-16">
        <div className="px-8 flex items-center w-full md:w-1/2">
          {dark && (
            <picture>
              <source
                srcSet={require('../public/images/projects/mater-dark.png?webp')}
                type="image/webp"
              />
              <source
                srcSet={require('../public/images/projects/mater-dark.png')}
                type="image/png"
              />
              <img
                src={materDarkPic.trace}
                alt="Isometric Contributions browser extension"
                className="rounded shadow-md"
              />
            </picture>
          )}
          {!dark && (
            <picture>
              <source
                srcSet={require('../public/images/projects/mater-light.png?webp')}
                type="image/webp"
              />
              <source
                srcSet={require('../public/images/projects/mater-light.png')}
                type="image/png"
              />
              <img
                src={materPic.trace}
                alt="Isometric Contributions browser extension"
                className="rounded shadow-md"
              />
            </picture>
          )}
        </div>
        <div className="text-gray-700 dark:text-gray-500 px-8 py-6 md:py-0 flex flex-col justify-center w-full md:w-1/2">
          <h3 className="font-bold text-xl">
            <a href="https://github.com/jasonlong/mater">mater</a>
          </h3>
          <p>
            A simple menubar app for using the{' '}
            <a href="https://www.wikiwand.com/en/Pomodoro_Technique">
              Pomorodoro Technique
            </a>
            . Works on macOS and Windows.
          </p>
          <p className="mt-4">
            <StarIcon size={16} />
            <span className="inline-block align-middle ml-2">
              {dataMater && dataMater.stargazers_count}
            </span>
          </p>
        </div>
      </div>

      <div className="mb-16 flex flex-col md:flex-row mb-16">
        <div className="px-8 flex items-center w-full md:w-1/2">
          {dark && (
            <picture>
              <source
                srcSet={require('../public/images/projects/geo-dark.png?webp')}
                type="image/webp"
              />
              <source
                srcSet={require('../public/images/projects/geo-dark.png')}
                type="image/png"
              />
              <img
                src={geoDarkPic.trace}
                alt="geo_pattern library"
                className="rounded shadow-md"
              />
            </picture>
          )}
          {!dark && (
            <picture>
              <source
                srcSet={require('../public/images/projects/geo-light.png?webp')}
                type="image/webp"
              />
              <source
                srcSet={require('../public/images/projects/geo-light.png')}
                type="image/png"
              />
              <img
                src={geoPic.trace}
                alt="geo_pattern library"
                className="rounded shadow-md"
              />
            </picture>
          )}
        </div>
        <div className="text-gray-700 dark:text-gray-500 px-8 py-6 md:py-0 flex flex-col justify-center w-full md:w-1/2">
          <h3 className="font-bold text-xl">
            <a href="https://github.com/jasonlong/mater">geo_pattern</a>
          </h3>
          <p>
            A tool for generating tiling SVG patterns from a string
            procedurally. Written in Ruby with ports available for many other
            languages.
          </p>
          <p className="mt-4">
            <StarIcon size={16} />
            <span className="inline-block align-middle ml-2">
              {dataGeo && dataGeo.stargazers_count}
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
