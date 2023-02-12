import { Router } from '~src/utils/router'
import LoginPage from '~src/view/login'
import RegistrationPage from '~src/view/registration'
import GeneralPage from '~src/view/general'
import Error404Page from '~src/view/404'
import Error500Page from '~src/view/500'

const router = new Router('body')

router.use('/', LoginPage)
router.use('/sign-up', RegistrationPage)
router.use('/messenger', GeneralPage)
router.use('/404', Error404Page)
router.use('/500', Error500Page)

export default router
