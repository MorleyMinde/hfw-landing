import { LandingPage } from './app.po';

describe('landing App', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
