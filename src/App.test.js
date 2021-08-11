import { Builder, By, Key, until } from "selenium-webdriver";
import { config } from 'dotenv-flow';

let driver;
const IMG_SELECTOR = 'img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"]';
const SEARCH_BAR_SELECTR = 'input[type="text"][placeholder="Search places..."]';

beforeAll(() => {
  config({ silent: true });
});

beforeEach(async () => {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.manage().setTimeouts( { implicit: 5_000 } );
  await driver.get(process.env.TEST_URL);
});

afterEach(async () => {
  await driver.quit();
});

test('Web app starts with a search bar and no marks', async () => {
  await driver.findElement(By.css(SEARCH_BAR_SELECTR));
  let images = await driver.findElements(By.css(IMG_SELECTOR));
  expect(images).toHaveLength(0);
}, 60_000);

test('Web app shows some results when some data is written in the search bar', async () => {
  let searchBar = await driver.findElement(By.css(SEARCH_BAR_SELECTR));
  await searchBar.sendKeys(`México${Key.DOWN}`);
  let results = await driver.findElements(By.css('div.pac-container.pac-logo.hdpi > div.pac-item'));
  expect(results).toHaveLength(5);
}, 60_000);

test('Web app puts marks in the map when locations are selected', async () => {
  let searchBar = await driver.findElement(By.css(SEARCH_BAR_SELECTR));
  let countries = [
    'Mexico',
    'Spain',
    'Russia',
    'China',
    'Australia',
    'Brazil',
    'Canada'
  ];
  for (const country of countries) {
    await searchBar.sendKeys(`${country}${Key.DOWN}${Key.ENTER}`);
    await searchBar.sendKeys(`${Key.chord(Key.CONTROL, 'a')}`);
    await searchBar.sendKeys(`${Key.BACK_SPACE}`);
  }
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) > div:nth-child(${countries.length+1}) > ${IMG_SELECTOR}`)));
  let images = await driver.findElements(By.css(IMG_SELECTOR));
  expect(images).toHaveLength(countries.length);
}, 60_000);
