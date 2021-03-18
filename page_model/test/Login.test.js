import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'

fixture('Feature Login')
  .page `https://www.saucedemo.com/`
  
test('As a user can login with valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.lblPageTitle.exists).ok()
})

test('As a user can not login with invalid credentials', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.lblErrorMessage.exists).ok()
})

test('As a login user can logout', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.logout()
    await t.expect(LoginPage.btnLogIn.exists).ok()
})