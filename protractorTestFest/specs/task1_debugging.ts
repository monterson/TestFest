/*
Zadanie 1:      Debuggowanie przy uzyciu screenshoot reportera oraz jasmine spec reportera.
Treść zadania:  Znajdź błąd w poniższych testach.
Podpowiedź:     Użyj danych z reportera (target/screenshots/my-report) oraz logów ze spec reportera
*/
import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Troll search page', () => {
    let pages;
    beforeAll(() => {
        pages = new Pages();
        browser.get('http://utsoft.pl');
        pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
        pages.homePage.proceedToTrollSearchPage();

    });

    it('should find Troll using Name', () => {
        pages.searchTrollPage.searchTroll("Trol1");
        expect(pages.searchTrollPage.getNumberOfVisibleRows()).toEqual(1);
    });

    it('should find Troll using Email', () => {
        pages.searchTrollPage.searchTroll("2@2.pl");
        expect(pages.searchTrollPage.getNumberOfVisibleRows()).toEqual(1);
    });

    it('should find Troll using Intelligence', () => {
        pages.searchTrollPage.searchTroll("Medium");
        let columnNo = 4;
        expect(pages.searchTrollPage.getValuesFromVisibleRows(columnNo)).toContain("Medium");
    });

    it('should find Troll using Target', () => {
        pages.searchTrollPage.searchTrollUsingTarget("abcd");
        expect(pages.searchTrollPage.getNumberOfVisibleRows()).toEqual(1);
    });
});

