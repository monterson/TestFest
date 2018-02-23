import { by, element, browser } from 'protractor';

export class LoginPage {
    private _email = element(by.name('email'));
    private _password = element(by.model('login.password'));
    private _buttonSubmit = element(by.css('button[type="submit"]'));
    private _divLoginBox = element(by.id('.login-box'));

    public loginToApplication(login, password) {
        this._email.sendKeys(login);
        this._password.sendKeys(password);
        this._buttonSubmit.click();
    }

    public visibilityOfLoginBox(): any {
        return this._divLoginBox.isDisplayed();
    }
  
}
