import React, { Component, Fragment } from "react"
import { useDarkMode } from 'next-dark-mode'
import Toggle from 'react-toggle'

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
      <div className="dark:bg-black switch">
        <Toggle
          defaultChecked={darkModeActive}
          aria-label='Toggle light and dark modes'
          onChange={toggleMode} />

        <div className="bg-white dark:bg-black">
          {children}
        </div>
      </div>
    </div>
  )
}

