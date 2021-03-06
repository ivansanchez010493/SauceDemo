import {Selector, t} from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.lblCartTitle = Selector('div.subheader')
        this.lblProductName = Selector('.inventory_item_name')
        this.btnCheckout = Selector('.checkout_button')
    }

    async validateProduct(productName){
        await t.expect(this.lblProductName.withText(productName).exists).ok()
    }
  }
  
  export default new ShoppingCartPage()