import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('fills in the form and calculates users bmi value', () => {
      page.fillInForm(180, 90);
      expect(page.result_content()).toContain('You, who weight 90 kg and are about 180 cm height')
      expect(page.result_content()).toContain('Have BMI value of 27.78')
      expect(page.result_content()).toContain('And considered to be overweight')
    });
  })
});