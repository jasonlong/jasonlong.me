import { useDarkMode } from 'next-dark-mode'
import SiteHeader from './site-header'

export default function Layout({ children }) {
  const { darkModeActive } = useDarkMode()

  return (
    <div className={`mode-${darkModeActive ? 'dark' : 'light'}`}>
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <SiteHeader />
          {children}
        </div>
      </div>
    </div>
  )
}
