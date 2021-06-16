/* eslint-disable global-require */

import TerminalIcon from './icons/terminal-icon'
import Project from './project'

export default function Projects({ projects, dark }) {
  return (
    <>
      <div className="w-16 p-5 mx-auto mt-12 text-gray-800 bg-gray-200 rounded-full dark:bg-gray-800 md:w-20 md:p-6 dark:text-gray-200">
        <TerminalIcon />
      </div>

      <h2 className="px-8 pb-4 mt-4 mb-4 font-black text-center text-large md:text-xl dark:text-gray-100">
        I have a few side projects.
      </h2>

      {projects.map((project, i) => (
        <Project
          key={project.fileName}
          content={project}
          dark={dark}
          reverse={i % 2}
        />
      ))}
    </>
  )
}
