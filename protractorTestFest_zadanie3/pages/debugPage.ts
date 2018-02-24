import { by, element, browser } from 'protractor';

export class DebugPage {
    private _inputUserName = element(by.model('username'));
    private _inputNickName = element(by.model('nickname'));
    private _textUserName = element(by.binding('username'));
    private _textNick = element(by.binding('nickname'));

    public async  setUserName(name) {
        await this._inputUserName.clear();
        await this._inputUserName.sendKeys(name);
    }

    public async setNickName(name) {
        await this._inputNickName.clear();
        await this._inputNickName.sendKeys(name);
    }

    public async getTextUserName(name) {
        return await this._textUserName.getText();
    }
}
