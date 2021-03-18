import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import { USERDATA } from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'

const products = require('../data/products.json');

fixture('Feature Purchase Order')
  .page `https://www.saucedemo.com/`

test('As a registered user should see an error message when missing enter mail information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addProduct('Sauce Labs Backpack')
    await t.click(ProductsPage.btnShoppingCart)
    await t.click(ShoppingCartPage.btnCheckout)
    await t.click(CheckoutPage.btnContinue)
    await t.expect(CheckoutPage.lblErrorMessage.exists).ok()
})

test('As a registered user should see the overview page after fill mail information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addProduct('Sauce Labs Backpack')
    await t.click(ProductsPage.btnShoppingCart)
    await t.click(ShoppingCartPage.btnCheckout)
    await CheckoutPage.fillUserInformation(USERDATA.FIRSTNAME, USERDATA.LASTNAME, USERDATA.ZIPCODE)
    await t.expect(OverviewPage.lblPageTitle.exists).ok()
})

test('As a registered user should see the products added in overview page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    for(const { name } of products) {
      await ProductsPage.addProduct(name)
    }
    await t.click(ProductsPage.btnShoppingCart)
    await t.click(ShoppingCartPage.btnCheckout)
    await CheckoutPage.fillUserInformation(USERDATA.FIRSTNAME, USERDATA.LASTNAME, USERDATA.ZIPCODE)
    for(const { name } of products) {
     await OverviewPage.validateProduct(name)
    }
})

test('As a registered user should see the confirmation page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    for(const { name } of products) {
      await ProductsPage.addProduct(name)
    }
    await t.click(ProductsPage.btnShoppingCart)
    await t.click(ShoppingCartPage.btnCheckout)
    await CheckoutPage.fillUserInformation(USERDATA.FIRSTNAME, USERDATA.LASTNAME, USERDATA.ZIPCODE)
    for(const { name } of products) {
     await OverviewPage.validateProduct(name)
    }
    await t.click(OverviewPage.btnFinish)
    await t.expect(ConfirmationPage.lblConfirmation.exists).ok()
})