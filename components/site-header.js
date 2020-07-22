import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'
import Sun from '../components/sun'
import Moon from '../components/moon'

export default function SiteHeader() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleMode = () => {
    if (darkModeActive) switchToLightMode()
    else switchToDarkMode()
  }

  return (
    <>
    <img src="images/logo.svg" className="pl-8" />

    <div className="pr-8 text-right">
      <Toggle
        checked={darkModeActive}
        icons={{
          checked: <Moon />,
          unchecked: <Sun />
        }}
        aria-label='Toggle light and dark modes'
        onChange={toggleMode} />
    </div>
    </>
  )
}
