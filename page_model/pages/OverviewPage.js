import {Selector, t} from 'testcafe'

class OverviewPage{
    constructor(){
        this.lblPageTitle = Selector('.subheader').withText('Checkout: Overview')
        this.lblProductName = Selector('.inventory_item_name')
        this.btnFinish = Selector('.btn_action')
    }

    async validateProduct(productName){
        await t.expect(this.lblProductName.withText(productName).exists).ok()
    }
  }
  
  export default new OverviewPage()