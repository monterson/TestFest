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

    public proceedToTrollSearchPage() {
        this._buttonSearchTroll.click();
    }

    public proceedToRegisterTrollPage() {
        this._buttonRegisterTroll.click();
    }

    public proceedToAngularPractisPage() {
        this._buttonGoToAngular.click();
    }

    public proceedToNonAngularPage() {
        this._buttonNonAngularPage.click();
    }

    public isLogoDisplayed(): any {
        return this._imgLogo.isDisplayed();
    }

    public pressImgLogo() {
        this._imgLogo.click();
    }

    public logoutFromAplication() {
        this._buttonLogout.click();
    }

    public getLoggedUserText(): any {
        return this._textLoggedUser.getText();
    }
}
