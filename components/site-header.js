/* eslint-disable react/display-name */

import dynamic from 'next/dynamic'
import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'
import Sun from './icons/sun'
import Moon from './icons/moon'
import SocialMediaIcons from './social-media-icons'

const Logo = dynamic(() => import('./logo'), {
  loading: () => <div style={{ width: '90px', height: '90px' }} />,
  ssr: false,
})

export default function SiteHeader() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleMode = () => {
    if (darkModeActive) switchToLightMode()
    else switchToDarkMode()
  }

  return (
    <div className="flex items-center justify-between max-w-screen-xl px-8 py-4 mx-auto xl:px-0">
      <Logo />

      <div className="flex flex-row items-center">
        <div className="flex flex-row mr-4">
          <SocialMediaIcons />
        </div>

        <Toggle
          checked={darkModeActive}
          icons={{
            checked: <Moon />,
            unchecked: <Sun />,
          }}
          aria-label="Toggle light and dark modes"
          onChange={toggleMode}
        />
      </div>
    </div>
  )
}
