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

    async openSavedArticales() {
        this.savedButton.click();
    }

    async goBack() {
        await this.backButton.click();
    };

    async addArtcileToSaved() {
        await this.saveArticleButton.click();
    };

    async more() {
        const moreBtn = await $('//android.widget.FrameLayout[@resource-id="org.wikipedia:id/nav_more_container"]')
        await moreBtn.click();
    };

    async settings() {
        const settingsBtn = await $('//android.widget.LinearLayout[@resource-id="org.wikipedia:id/main_drawer_settings_container"]');
        await settingsBtn.click();
    };
}