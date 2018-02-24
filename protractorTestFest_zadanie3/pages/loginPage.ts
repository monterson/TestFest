import { by, element, browser } from 'protractor';

export class LoginPage {
    private _email = element(by.name('email'));
    private _password = element(by.model('login.password'));
    private _buttonSubmit = element(by.css('button[type="submit"]'));
    private _divLoginBox = element(by.id('.login-box'));

    public async loginToApplication(login, password) {
        await this._email.sendKeys(login);
        await this._password.sendKeys(password);
        await this._buttonSubmit.click();
    }

    public async visibilityOfLoginBox() {
        return await this._divLoginBox.isDisplayed();
    }
  
}
