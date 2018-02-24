/*
Zadanie Dodatkowe:      Nie angularowa strona
Treść zadania:          Popraw testy na pobieranie tokena z nieangularowej strony
Podpowiedź:             W jaki sposób wyłączyć synchronizację protractora z angularem?
*/

import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Non angular functionality', () => {
    let pages;
    beforeEach(() => {
        pages = new Pages();
        browser.get('http://utsoft.pl');
        pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
    });

    it('should get token from non angular page ', () => {
        pages.homePage.proceedToNonAngularPage();
        expect(pages.nonAngularPage.textTokenValue.getText()).toEqual('33');
    });

    it('should get token from non angular page and go back to the main page', () => {
        pages.homePage.proceedToNonAngularPage();
        pages.nonAngularPage.backToHomePage();
        pages.homePage.logoutFromAplication();
        expect(pages.loginPage.visibilityOfLoginBox()).toBe(true);
    });
});

