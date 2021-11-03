import { atom } from 'recoil'
// import { isDarkModeEnabled } from '../util'

const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false,
})

export default isDarkModeState
