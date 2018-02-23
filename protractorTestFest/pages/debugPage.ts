import { by, element, browser } from 'protractor';

export class DebugPage {
    private _inputUserName = element(by.model('username'));
    private _inputNickName = element(by.model('nickname'));
    private _textUserName = element(by.binding('username'));
    private _textNick = element(by.binding('nickname'));

    public setUserName(name) {
        this._inputUserName.clear();
        this._inputUserName.sendKeys(name);
    }

    public setNickName(name) {
        this._inputNickName.clear();
        this._inputNickName.sendKeys(name);
    }

    public getTextUserName(name) {
        return this._textUserName.getText();
    }
}
