import router from '~src/router'
import Store from '~src/store'

router.start()

window.appStore = Store

declare global {
  interface Window {
    appStore: typeof Store
  }
}
