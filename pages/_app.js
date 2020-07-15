import '../styles/index.css'
import '../styles/toggle.css'
import App from 'next/app'
import withDarkMode, { useDarkMode } from 'next-dark-mode'

function MyApp({ Component, pageProps }) {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode()

  return <Component {...pageProps} />
}

export default withDarkMode(MyApp)
