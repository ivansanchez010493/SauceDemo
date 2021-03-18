import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'

fixture('Feature Shopping Cart')
  .page `https://www.saucedemo.com/`
  
test('As a registered user can enter to shopping cart section', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.btnShoppingCart)
    await t.expect(ShoppingCartPage.lblCartTitle.exists).ok()
})

test('As a registered user can add a product to the cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addProduct('Sauce Labs Backpack')
})