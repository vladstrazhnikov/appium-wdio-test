export class NavigationPage {
    get backButton() {
        return $('//android.widget.ImageButton');
    }

    get savedButton() {
        return $('//android.widget.FrameLayout[@content-desc="Saved"]');
    }

    get saveArticleButton() {
        return $('//android.widget.TextView[@content-desc="Save"]');
    }

    get moreButton() {
        return $('//android.widget.FrameLayout[@resource-id="org.wikipedia:id/nav_more_container"]');
    }

    get settingsButton(){
        return $('//android.widget.LinearLayout[@resource-id="org.wikipedia:id/main_drawer_settings_container"]');
    }

    async openSavedArticales() {
        this.savedButton.click();
    }

    async goBack() {
        await this.backButton.click();
    };

    async addArtcileToSaved() {
        await this.saveArticleButton.click();
    };

    async openMoreTab() {
        await this.moreButton.click();
    };

    async openSettings() {
        await this.settingsButton.click();
    };
}