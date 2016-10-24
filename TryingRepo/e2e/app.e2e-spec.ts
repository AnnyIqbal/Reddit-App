import { TryingRepoPage } from './app.po';

describe('trying-repo App', function() {
  let page: TryingRepoPage;

  beforeEach(() => {
    page = new TryingRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
