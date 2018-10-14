import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

 getPageOneTitleText() {
    return element(by.tagName('calculator')).element(by.tagName('ion-title')).getText();
  }

  fillInForm(weight, height) {

    element(by.css('.text-input')).clear().then(() => {
        element(by.css('.text-input')).sendKeys(weight);
    }) 

    element(by.css('.select')).click().then(() => {
        browser.sleep(500);

        //element(by.cssContainingText('.button-inner', gender)).click();
        //element(by.cssContainingText('.button-inner', 'OK')).click();

    })

    browser.sleep(500);

    element(by.cssContainingText('.button', 'Calculate')).click();

}

results_card_header() {
    return element(by.css('ion-card-header')).getText();
} 

results_card_content() {
    return element(by.css('ion-card-content')).getAttribute('textContent');
} 

}