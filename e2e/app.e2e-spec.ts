import { EYCaseStudyPage } from './app.po';

describe('ey-case-study App', function() {
  let page: EYCaseStudyPage;

  beforeEach(() => {
    page = new EYCaseStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
