import React, { Component, Fragment } from "react"
import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'
import Sun from '../components/sun'
import Moon from '../components/moon'

export default function Layout({ children }) {
  const { autoModeActive, darkModeActive, switchToAutoMode, switchToDarkMode, switchToLightMode } = useDarkMode()

  const findActive = (text) => {
    if (autoModeActive) return text === 'auto'
    else if (darkModeActive) return text === 'dark'
    else return text === 'light'
  }

  const toggleMode = () => {
    if (darkModeActive) switchToLightMode()
    else switchToDarkMode()
  }

  return (
    <div className={`mode-${darkModeActive ? 'dark' : 'light'}`}>
      <div className="bg-white dark:bg-gray-900">
        <div className="pt-8 pr-8 text-right">
          <Toggle
            defaultChecked={darkModeActive}
            icons={{
              checked: <Moon />,
              unchecked: <Sun />
            }}
            aria-label='Toggle light and dark modes'
            onChange={toggleMode} />
      </div>
        {children}
      </div>
    </div>
  )
}

