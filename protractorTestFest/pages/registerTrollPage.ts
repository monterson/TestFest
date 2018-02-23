import { by, element, browser } from 'protractor';

export class RegisterTrollPage {
    private _inputName = element(by.name('name'));
    private _inputEmail = element(by.id('email'));
    private _inputTarget = element(by.id('company_name'));
    private _inputIntelligence = element(by.model('tempUser.designation'));
    private _buttonAdd = element(by.css('[type="submit"]'));
    private _alert = element(by.css('[role="alertt"]'));

    public isAlertVisible() {
        return this._alert.isDisplayed();
    }

    public setName(name) {
        this._inputName.sendKeys(name);
    }

    public setEmail(email) {
        this._inputEmail.sendKeys(email);
    }

    public setTarget(target) {
        this._inputTarget.sendKeys(target);
    }
    public setIntelligence(intelligence) {
        this._inputIntelligence.sendKeys(intelligence);
    }

    public pressAddNewTroll() {
        this._buttonAdd.click();
    }
}