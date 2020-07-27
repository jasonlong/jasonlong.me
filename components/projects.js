/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

import isoPic from '../public/images/projects/isometric-contributions.png?trace'
import TerminalIcon from './terminal-icon'

export default function Projects() {
  return (
    <>
      <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-16 md:w-20 p-5 md:p-6 text-gray-800 dark:text-gray-200 mx-auto mt-12">
        <TerminalIcon />
      </div>

      <h2 className="text-center pb-4 px-8 mt-4 mb-4 text-large md:text-xl font-black dark:text-gray-100">
        I have a few side projects.
      </h2>

      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="px-8 flex items-center">
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
        <div className="px-8 py-6 md:py-0 flex flex-col justify-center">
          <h3 className="font-bold text-xl">
            <a href="https://github.com/jasonlong/isometric-contributions">
              isometric-contributions
            </a>
          </h3>
          <p className="text-gray-700 dark:text-gray-500">
            A browser extension that allows you view your GitHub contribution
            graph in 3D. Available for Chrome, Brave, and Firefox.
          </p>
        </div>
      </div>
    </>
  )
}
