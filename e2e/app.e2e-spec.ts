import { ExpandableGridPage } from './app.po';

describe('expandable-grid App', () => {
  let page: ExpandableGridPage;

  beforeEach(() => {
    page = new ExpandableGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
