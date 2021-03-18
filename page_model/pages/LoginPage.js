import {Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
      this.inpUserName = Selector('#user-name')
      this.inpPassword = Selector('#password')
      this.btnLogIn = Selector('#login-button')
      this.lblErrorMessage = Selector('h3')
    }
  
    async submitLoginForm(username, password){
      await t.typeText(this.inpUserName, username, {paste:true})
      await t.typeText(this.inpPassword, password, {paste:true})
      await t.click(this.btnLogIn)
    }
  }
  
  export default new LoginPage()