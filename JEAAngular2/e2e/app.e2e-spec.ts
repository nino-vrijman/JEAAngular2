import { JEAAngular2Page } from './app.po';

describe('jeaangular2 App', () => {
  let page: JEAAngular2Page;

  beforeEach(() => {
    page = new JEAAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
