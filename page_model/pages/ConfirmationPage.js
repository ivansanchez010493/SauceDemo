import {Selector, t} from 'testcafe'

class ConfirmationPage{
    constructor(){
        this.lblConfirmation = Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER')
    }
  }
  
  export default new ConfirmationPage()