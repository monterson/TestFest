/*
Zadanie 3:      Chrome debugger
Treść zadania:  Zdebugguj ponizszy kod korzystajac z chrome debuggera
*/


import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Troll register page', () => {
    let pages;
    beforeAll(() => {
        pages = new Pages();
        browser.get('http://utsoft.pl');
        pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
    });

    it('should register new troll', () => {
        pages.homePage.proceedToRegisterTrollPage();
        pages.registerTrollPage.setName('TrolZ');
        pages.registerTrollPage.setEmail('z@z.pl.com');
        pages.registerTrollPage.setTarget('All');
        pages.registerTrollPage.setIntelligence('Low');
        pages.registerTrollPage.pressAddNewTroll();
        expect(pages.registerTrollPage.isAlertVisible()).toEqual(true);
    });
});

