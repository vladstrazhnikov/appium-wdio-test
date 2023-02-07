import { ExplorePage } from '../pageobjects/explore.page.js';
import { OnBoardingPage } from '../pageobjects/on-boarding.page.js';
import { NavigationPage } from '../pageobjects/navigation.page.js';
import { SettingsPage } from '../pageobjects/settings.page.js';
import { ArticlePage } from '../pageobjects/article.page.js';
import { SavedPage } from '../pageobjects/saved.page.js';

describe('Explore', async () => {
    const explorePage = new ExplorePage();
    const onBoardingPage = new OnBoardingPage();
    const navigationPage = new NavigationPage();
    const settingsPage = new SettingsPage();
    const articlePage = new ArticlePage();
    const savedPage = new SavedPage();

    beforeEach(async () => {
        await onBoardingPage.skipOnBoarding();
    });

    afterEach(async () => {
        await driver.reloadSession();
    });

    /**
     * Test case steps:
     * Enter Test automation in search container
     * Tap enter
     */
    it('can find article', async () => {
        const articleTitle = 'Test automation';
        await explorePage.searchFor(articleTitle);
        await expect(articlePage.articleTitle).toHaveText(articleTitle);
    });

    /**
     * Test case steps:
     * Find article
     * Tap save
     * Go to save and verify that article is added
     */
    it('can add article to the saved', async () => {
        const articleTitle = 'Test automation';
        await explorePage.searchFor(articleTitle);
        await expect(articlePage.articleTitle).toHaveText(articleTitle);
        await navigationPage.addArtcileToSaved();
        await navigationPage.goBack();
        await navigationPage.goBack();
        await navigationPage.openSavedArticales();
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
    it('can change app theme', async () => {
        const defaultText = '100% (Default)';
        const changedText = '110%';

        await navigationPage.openMoreTab();
        await navigationPage.openSettings();
        await settingsPage.openAppTheme();
        await expect(settingsPage.textSizePercent).toHaveText(defaultText);
        await settingsPage.increaseTextSizeButton.click();
        await expect(settingsPage.textSizePercent).toHaveText(changedText);
        await expect(settingsPage.blackThemeButton).toBeDisabled();
        await settingsPage.themeSwitcher.click();
        await expect(settingsPage.blackThemeButton).toBeEnabled();
        await settingsPage.blackThemeButton.click();
    });
})


