import { by, element, browser } from 'protractor';

export class AngularPractisPage {
    private _buttonDebugPage = element(by.css('[href="/TrainingProtractor/#/debugging"]'));
    private _buttonLogout = element(by.css('[ng-click="logout();"]'));

    public proceedToDebugPage() {
        this._buttonDebugPage.click();
    }
    public visibilityOfDebuggingButton(): any {
        return this._buttonDebugPage.isDisplayed();
    }
}