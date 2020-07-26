/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

import gitLogo from '../public/images/logos/git.png?trace'
import libgit2Logo from '../public/images/logos/libgit2.png?trace'
import neovimLogo from '../public/images/logos/neovim.png?trace'
import tmuxLogo from '../public/images/logos/tmux.png?trace'
import PaintIcon from './paint-icon'

export default function Logos() {
  return (
    <>
      <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-16 md:w-20 p-5 md:p-6 text-gray-800 dark:text-gray-200 mx-auto mt-12">
        <PaintIcon />
      </div>

      <h2 className="text-center pb-8 px-8 mt-4 mb-4 text-large md:text-xl font-black dark:text-gray-100">
        Logos I&apos;ve designed for open source projects
      </h2>

      <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        <div className="bg-orange-100 dark:bg-orange-200 p-12 sm:p-16 flex items-center h-64">
          <picture>
            <source
              srcSet={require('../public/images/logos/git.png?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../public/images/logos/git.png')}
              type="image/png"
            />
            <img src={gitLogo.trace} alt="Git logo" />
          </picture>
        </div>
        <div className="bg-teal-100 dark:bg-teal-200 p-12 sm:p-16 flex items-center h-64">
          <picture>
            <source
              srcSet={require('../public/images/logos/libgit2.png?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../public/images/logos/libgit2.png')}
              type="image/png"
            />
            <img src={libgit2Logo.trace} alt="libgit2 logo" />
          </picture>
        </div>
        <div className="bg-blue-100 dark:bg-blue-200 p-12 sm:p-16 flex items-center h-64">
          <picture>
            <source
              srcSet={require('../public/images/logos/neovim.png?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../public/images/logos/neovim.png')}
              type="image/png"
            />
            <img src={neovimLogo.trace} alt="Neovim logo" />
          </picture>
        </div>
        <div className="bg-green-100 dark:bg-green-200 p-12 sm:p-16 flex items-center h-64">
          <picture>
            <source
              srcSet={require('../public/images/logos/tmux.png?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../public/images/logos/tmux.png')}
              type="image/png"
            />
            <img src={tmuxLogo.trace} alt="tmux logo" />
          </picture>
        </div>
      </div>
    </>
  )
}
