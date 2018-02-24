import { by, element, browser } from 'protractor';

export class AngularPractisPage {
    private _buttonDebugPage = element(by.css('[href="/TrainingProtractor/#/debugging"]'));
    private _buttonLogout = element(by.css('[ng-click="logout();"]'));

     public async proceedToDebugPage () {
        await this._buttonDebugPage.click();
    }
    public async  visibilityOfDebuggingButton() {
        return await this._buttonDebugPage.isDisplayed();
    }
}