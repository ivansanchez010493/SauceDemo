import {Selector, t} from 'testcafe'

class ProductsPage{
    constructor(){
      this.lblPageTitle = Selector('.product_label')
      this.btnMenu = Selector('#react-burger-menu-btn')
      this.btnLogout = Selector('#logout_sidebar_link')
      this.btnShoppingCart = Selector('.svg-inline--fa')
    }

    async logout(){
        await t.click(this.btnMenu)
        await t.click(this.btnLogout)
    }
}
  
  export default new ProductsPage()