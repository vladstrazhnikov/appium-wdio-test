import { ExplorePage } from '../pageobjects/explore.page.js';
import { OnBoarding } from '../pageobjects/on-boarding.page.js';
import { NavigationPage } from '../pageobjects/navigation.page.js';
import { Settings } from '../pageobjects/settings.page.js';
import { ArticlePage } from '../pageobjects/article.page.js';
import { SavedPage } from '../pageobjects/saved.page.js';

describe('Explore', () => {
    const explorePage = new ExplorePage();
    const onBoarding = new OnBoarding();
    const navigationPage = new NavigationPage();
    const settingsPage = new Settings();
    const articlePage = new ArticlePage();
    const savedPage = new SavedPage();

    beforeEach(async () => {
        await onBoarding.skip();
    });

    afterEach(async () => {
        await driver.reloadSession();
    });

    /**
     * Test case steps:
     * Enter Appium in search container
     * Tap enter
     */
    it('can find article', async () => {
        const articleTitle = 'Test automation';
        await explorePage.openSearch();
        await explorePage.fillOpenedSearch(articleTitle);
        await expect(explorePage.openedSearchContainer).toHaveText(articleTitle);
        await driver.pressKeyCode(66);
        await explorePage.elemSearchBtn();
        await expect(articlePage.title).toHaveText(articleTitle);
    });

    /**
     * Test case steps:
     * Find article
     * Tap save
     * Go to save and verify that article is added
     */
    it('can add article to the saved', async () => {
        const articleTitle = 'Test automation';
        await explorePage.openSearch();
        await explorePage.fillOpenedSearch(articleTitle);
        await expect(explorePage.openedSearchContainer).toHaveText(articleTitle);
        await driver.pressKeyCode(66); // tap enter button
        await explorePage.elemSearchBtn();
        await expect(articlePage.title).toHaveText(articleTitle);
        await navigationPage.save();
        await navigationPage.back();
        await navigationPage.back();
        await navigationPage.saved();
        await savedPage.openSavedArticles();
        await expect(savedPage.savedArticle).toHaveText(articleTitle);
    });

    /**
     * Test case steps:
     * Scroll down
     * Verify date of featured article
     * Open featured article
     */
    it('can open featured article', async () => {
        await driver.touchAction([
            { action: 'press', x: 146, y: 555 },
            { action: 'moveTo', x: 146, y: 150 },
            'release',
        ]);
        const currentDate = new Date();
        const today = currentDate.toLocaleDateString("en-US", { month: 'long', day: 'numeric' });
        await expect(articlePage.articleDate).toHaveText(today);
        await articlePage.featuredArticle.click();
    });

    /**
     * Test case steps:
     * Go to More -> Settings -> App theme
     * Verify that Black themes are disabled
     * Switch off Match system theme
     * Switch to black theme
    */
    it.only('can change app theme', async () => {
        const defaultText = '100% (Default)';
        const changedText = '110%';

        await navigationPage.more();
        await navigationPage.settings();
        await settingsPage.appTheme();
        await expect(settingsPage.textSizePercent).toHaveText(defaultText);
        await settingsPage.increaseTextSizeButton.click();
        await expect(settingsPage.textSizePercent).toHaveText(changedText);
        await expect(settingsPage.blackThemeButton).toBeDisabled();
        await settingsPage.themeSwitcher.click();
        await expect(settingsPage.blackThemeButton).toBeEnabled();
        await settingsPage.blackThemeButton.click();
        await driver.pause(3000);
    });
})

