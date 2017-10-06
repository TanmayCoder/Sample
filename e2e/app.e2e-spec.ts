import { SampleTestApplicationPage } from './app.po';

describe('sample-test-application App', () => {
  let page: SampleTestApplicationPage;

  beforeEach(() => {
    page = new SampleTestApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
