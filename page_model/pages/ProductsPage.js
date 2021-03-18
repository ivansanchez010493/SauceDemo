import {Selector, t} from 'testcafe'

class ProductsPage{
    constructor(){
      this.lblPageTitle = Selector('.product_label')
      this.btnMenu = Selector('#react-burger-menu-btn')
      this.btnLogout = Selector('#logout_sidebar_link')
      this.btnShoppingCart = Selector('.svg-inline--fa')
      this.lbnNameProduct = Selector('.inventory_item_name')
      this.btnAddProduct = Selector('button.btn_primary')
      this.btnBack = Selector('button.inventory_details_back_button')
    }

    async logout(){
        await t.click(this.btnMenu)
        await t.click(this.btnLogout)
    }

    async addProduct(productName){
      await t.click(this.lbnNameProduct.withText(productName))
      await t.click(this.btnAddProduct)
      await t.click(this.btnBack)
    }
}
  
  export default new ProductsPage()