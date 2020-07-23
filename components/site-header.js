import dynamic from 'next/dynamic'
import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'
import Sun from '../components/sun'
import Moon from '../components/moon'

const Logo = dynamic(() => import('../components/logo'), { ssr: false })

export default function SiteHeader() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleMode = () => {
    if (darkModeActive) switchToLightMode()
    else switchToDarkMode()
  }

  return (
    <div className="flex justify-between items-center py-4 px-6">
      <Logo />

      <Toggle
        checked={darkModeActive}
        icons={{
          checked: <Moon />,
          unchecked: <Sun />
        }}
        aria-label='Toggle light and dark modes'
        onChange={toggleMode} />
    </div>
  )
}
