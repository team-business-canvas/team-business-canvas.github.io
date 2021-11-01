import { keyframes } from 'styled-components'

const DrawerEase = keyframes`
    from {
        transform: translateX(-250px);
    }
    to {
        transform: translateX(0);
    }
`

export default DrawerEase
