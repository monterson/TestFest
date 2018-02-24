/*
Zadanie 2:      Wykluczanie testow Jasmine.
Treść zadania:  Wykonaj tylko te testy, ktore przechodza. 
Podpowiedź:     Skorzystaj z Jasminowych przedrostkow 'x' oraz 'f'
*/

import { ElementFinder, browser, by, element } from 'protractor';
import { Pages } from '../pages/pages';

describe('Troll search page', () => {
    let pages;
    beforeAll(() => {
        pages = new Pages();
        browser.get('http://utsoft.pl');
        pages.loginPage.loginToApplication('testfest@testfest.pl', '1234');
        pages.homePage.proceedToAngularPractisPage();
        pages.angularPractisPage.proceedToDebugPage();
    });

    it('should check some value1', () => {
        pages.debugPage.setUserName('abba');
        expect(pages.debugPage.getTextUserName()).toEqual('abba');
    });

    it('should check some value2', () => {
        pages.debugPage.setUserName('baba');
        expect(pages.debugPage.getTextUserName()).toEqual('baba');
    });

    it('should check some value3', () => {
        pages.debugPage.setUserName('lili');
        expect(pages.debugPage.getTextUserName()).toEqual('lili');
    });

    it('should check some value4', () => {
        pages.debugPage.setUserName('1iL');
        expect(pages.debugPage.getTextUserName()).toEqual('1iL');
    });

    it('should check some value5', () => {
        pages.debugPage.setUserName('bobboboo');
        expect(pages.debugPage.getTextUserName()).toEqual('bobboboo');
    });

    it('should check some value6', () => {
        pages.debugPage.setUserName('llLiiLilI');
        expect(pages.debugPage.getTextUserName()).toEqual('llLiiLi1I');
    });

    it('should check some value7', () => {
        pages.debugPage.setUserName('l0l0l0l0');
        expect(pages.debugPage.getTextUserName()).toEqual('l0l0l0l0');
    });

    it('should check some value8', () => {
        pages.debugPage.setUserName('A4A4A4AA44');
        expect(pages.debugPage.getTextUserName()).toEqual('A4A4A4A4A4');
    });
});

