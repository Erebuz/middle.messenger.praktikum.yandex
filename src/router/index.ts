import { Route, Router } from '~src/utils/Router'
import LoginPage from '~src/view/login'
import RegistrationPage from '~src/view/registration'
import GeneralPage from '~src/view/general'
import Error404Page from '~src/view/404'
import Error500Page from '~src/view/500'
import { getUser, logout } from '~src/controller/authController'
import { getChats } from '~src/controller/chatController'

const router = new Router('body')

router.checkAuth = function (this: Router, route: Route) {
  getUser()
    .then(() => {
      this._goto(route as Route)
    })
    .catch(() => {
      router.go('/')
    })
}

function load_data() {
  getChats()
}

router.use({ pathname: '/', component: LoginPage
  , beforeRoute: logout
})
router.use({ pathname: '/sign-up', component: RegistrationPage })
router.use({
  pathname: '/messenger',
  component: GeneralPage,
  auth: true,
  beforeRoute: load_data,
})
router.use({ pathname: '/404', component: Error404Page })
router.use({ pathname: '/500', component: Error500Page })

export default router
