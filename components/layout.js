import React, { Component, Fragment } from "react"
import { useDarkMode } from 'next-dark-mode'
import Logo from '../components/logo'
import SiteHeader from '../components/site-header'

export default function Layout({ children }) {
  const { darkModeActive } = useDarkMode()

  return (
    <div className={`mode-${darkModeActive ? 'dark' : 'light'}`}>
      <div className="pt-8 bg-white dark:bg-gray-900">
        <SiteHeader />
        {children}
      </div>
    </div>
  )
}

