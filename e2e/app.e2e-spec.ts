import { NgPortfolioPage } from './app.po';

describe('ng-portfolio App', () => {
  let page: NgPortfolioPage;

  beforeEach(() => {
    page = new NgPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
