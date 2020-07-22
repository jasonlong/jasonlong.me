import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'
import Logo from '../components/logo'
import Sun from '../components/sun'
import Moon from '../components/moon'

export default function SiteHeader() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleMode = () => {
    if (darkModeActive) switchToLightMode()
    else switchToDarkMode()
  }

  return (
    <div className="flex justify-between items-center px-8 py-4">
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
