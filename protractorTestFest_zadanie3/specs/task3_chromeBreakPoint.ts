/*
Zadanie 3:      Chrome debugger
Treść zadania:  Zdebugguj ponizszy kod korzystajac z chrome debuggera
*/


import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Troll register page', () => {
    let pages;
    beforeAll(async () => {
        pages = new Pages();
        await browser.get('http://utsoft.pl');
        await pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
    });

    it('should register new troll', async () => {
        await pages.homePage.proceedToRegisterTrollPage();
        await pages.registerTrollPage.setName('TrolZ');
        await pages.registerTrollPage.setEmail('z@z.pl.com');
        await pages.registerTrollPage.setTarget('All');
        await pages.registerTrollPage.setIntelligence('Low');
        await pages.registerTrollPage.pressAddNewTroll();
        expect(await pages.registerTrollPage.isAlertVisible()).toEqual(true);
    });
});

