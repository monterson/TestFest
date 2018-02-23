import { by, element, browser } from 'protractor';

export class NonAngularPage {
    private _linkBackToHomePage = element(by.css('[href="/TrainingProtractor/#/"]'));
    private _textTokenValue = element(by.id('secretToken'));

    public getTokenValue(): any {
        return this._textTokenValue.getText();
    }

    public backToHomePage() {
        return this._linkBackToHomePage.click();
    }
}
