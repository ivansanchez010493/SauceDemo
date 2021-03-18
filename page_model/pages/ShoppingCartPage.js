import {Selector, t} from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.lblCartTitle = Selector('div.subheader')
    }
  }
  
  export default new ShoppingCartPage()