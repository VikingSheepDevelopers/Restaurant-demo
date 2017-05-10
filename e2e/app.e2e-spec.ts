import { MyRestaurantAppPage } from './app.po';

describe('my-restaurant-app App', () => {
  let page: MyRestaurantAppPage;

  beforeEach(() => {
    page = new MyRestaurantAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
