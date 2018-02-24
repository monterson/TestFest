import { by, element, browser } from 'protractor';

export class HomePage {
    private _buttonRegisterTroll = element(by.binding('trolRegButton'));
    private _buttonSearchTroll = element(by.binding('trolSearchButton'));
    private _buttonEditTroll = element(by.css('[href="/TrainingProtractor/#/trolModification"][role="button"]'));
    private _buttonGoToAngular = element(by.css('[href="/TrainingProtractor/#/trolExpose"]'));
    private _imgLogo = element(by.css('[href="/TrainingProtractor"] img'));
    private _buttonLogout = element(by.css('[ng-click="logout();"]'));
    private _buttonNonAngularPage = element(by.css('[href="/TrainingProtractor/noAngular.html"]'));
    private _textLoggedUser = element(by.name('loggedUser'));

    public async proceedToTrollSearchPage() {
        await this._buttonSearchTroll.click();
    }

    public async proceedToRegisterTrollPage() {
        await this._buttonRegisterTroll.click();
    }

    public async proceedToAngularPractisPage() {
        await this._buttonGoToAngular.click();
    }

    public async proceedToNonAngularPage() {
        await this._buttonNonAngularPage.click();
    }

    public async isLogoDisplayed() {
        return await this._imgLogo.isDisplayed();
    }

    public async pressImgLogo() {
        await this._imgLogo.click();
    }

    public async logoutFromAplication() {
        await this._buttonLogout.click();
    }

    public getLoggedUserText(): any {
        return this._textLoggedUser.getText();
    }
}
