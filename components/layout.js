import { useDarkMode } from 'next-dark-mode'
import SiteHeader from './site-header'

export default function Layout({ children }) {
  const { darkModeActive } = useDarkMode()

  return (
    <div className={darkModeActive ? 'dark' : 'light'}>
      <div className="bg-white dark:bg-gray-900">
        <SiteHeader />
        {children}
      </div>
    </div>
  )
}
