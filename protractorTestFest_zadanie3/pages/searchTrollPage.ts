import { by, element, browser } from 'protractor';

export class SearchTrollPage {
    private _table = element.all(by.xpath('//table')).first();
    private _inputFilter = element(by.model('search'));
    private _selectNoOfRows = element(by.model('entryLimit'));
    private _rowsDisplayed = this._table.all(by.xpath('//tbody/tr'));
    private _cellsDisplayed = this._rowsDisplayed.all(by.xpath('//span/td'));
    private _buttonHint = element(by.css('[data-toggle="modal"]'));

    public searchTroll(searchedText) {
        this._inputFilter.clear();
        this._inputFilter.sendKeys(searchedText);
    }

    public searchTrollUsingTarget(target) {
        this.searchTroll(target);
        this._buttonHint.click();
    }

    public getNumberOfVisibleRows(): any {
        return this._rowsDisplayed.count();
    }

    public getValuesFromVisibleRows(columnNumber): any {
        return this._cellsDisplayed.get(columnNumber).getText();
    }
  
}