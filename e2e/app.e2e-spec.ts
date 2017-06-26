import { Angular2UdemyPage } from './app.po';

describe('angular2-udemy App', () => {
  let page: Angular2UdemyPage;

  beforeEach(() => {
    page = new Angular2UdemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
