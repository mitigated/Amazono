import { AngularAmazonoPage } from './app.po';

describe('angular-amazono App', () => {
  let page: AngularAmazonoPage;

  beforeEach(() => {
    page = new AngularAmazonoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
