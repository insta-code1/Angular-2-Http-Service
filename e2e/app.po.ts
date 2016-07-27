export class HttpAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('http-root h1')).getText();
  }
}
