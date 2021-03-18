import {Selector, t} from 'testcafe'

class CheckoutPage{
    constructor(){
        this.inpFirstName = Selector('#first-name')
        this.inpLastName = Selector('#last-name')
        this.inpZipCode = Selector('#postal-code')
        this.btnContinue = Selector('.btn_primary.cart_button')
        this.lblErrorMessage = Selector('h3')
    }

    async fillUserInformation(firstName, lastName, zipCode){
        await t.typeText(this.inpFirstName, firstName, {paste:true})
        await t.typeText(this.inpLastName, lastName, {paste:true})
        await t.typeText(this.inpZipCode, zipCode, {paste:true})
        await t.click(this.btnContinue)
    }
  }
  
  export default new CheckoutPage()