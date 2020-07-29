/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

import TerminalIcon from './icons/terminal-icon'
import Project from './project'

export default function Projects({ projects, dark }) {
  return (
    <>
      <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-16 md:w-20 p-5 md:p-6 text-gray-800 dark:text-gray-200 mx-auto mt-12">
        <TerminalIcon />
      </div>

      <h2 className="text-center pb-4 px-8 mt-4 mb-4 text-large md:text-xl font-black dark:text-gray-100">
        I have a few side projects.
      </h2>

      {projects.map((project, i) => (
        <Project key={project.fileName} content={project} dark={dark} reverse={i % 2} />
      ))}

    </>
  )
}
