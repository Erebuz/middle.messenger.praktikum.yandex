import router from '~src/router'
import AppWS from '~src/socket'

router.start()

export const appWS = new AppWS()

// window.appStore = Store
//
// declare global {
//   interface Window {
//     appStore: typeof Store
//   }
// }
