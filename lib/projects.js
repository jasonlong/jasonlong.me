/* eslint-disable no-else-return */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export default function () {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort projects by pageOrder
  return allProjectsData.sort((a, b) => {
    if (a.pageOrder < b.pageOrder) {
      return 1
    } else {
      return -1
    }
  })
}
