import { DARK_MODE } from '../constants'

const isDarkModeEnabled = () => {
  return localStorage.getItem(DARK_MODE) ?? false
}

export { isDarkModeEnabled }
