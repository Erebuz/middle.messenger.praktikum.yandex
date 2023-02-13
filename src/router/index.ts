import { Route, Router } from '~src/utils/Router'
import LoginPage from '~src/view/login'
import RegistrationPage from '~src/view/registration'
import GeneralPage from '~src/view/general'
import Error404Page from '~src/view/404'
import Error500Page from '~src/view/500'
import { checkAuth } from '~src/controller/auth'
import { api_get_chats } from '~src/store/Actions'

const router = new Router('body')

router.checkAuth = function (this: Router, route: Route) {
  checkAuth()
    .then(() => {
      this._goto(route as Route)
    })
    .catch(() => {
      router.go('/')
    })
}

router.beforeRoute = () => {
  api_get_chats()
}

router.use('/', LoginPage)
router.use('/sign-up', RegistrationPage)
router.use('/messenger', GeneralPage, true)
router.use('/404', Error404Page)
router.use('/500', Error500Page)

export default router
