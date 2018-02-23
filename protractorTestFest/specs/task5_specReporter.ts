/*
Zadanie Dodatkowe:       Jasmine spec reporter
Treść zadania:           Przy pomocy danych z Jasmine Spec Reporter przejdz do failujacego testu i go popraw
Do przemyslenia:         Czy liniowa zaleznosc testow o dobry pomysl?
*/

import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Navigation functionality', () => {
    let pages;
    beforeAll(() => {
        pages = new Pages();
        browser.get('http://utsoft.pl');
    });

    it('should login to aplication', () => {
        pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
        expect(pages.homePage.isLogoDisplayed()).toBe(true);
    });

    it('should proceed to Angular Practis page', () => {
        pages.homePage.proceedToAngularPractisPage();
        expect(pages.angularPractisPage.visibilityOfDebugingButton()).toBe(true);
    });

    it('should back to the Home page', () => {
        pages.homePage.pressImgLogo();
        expect(pages.homePage.getLoggedUserText()).toBe('testfest@testfest.pl');
    });
});

