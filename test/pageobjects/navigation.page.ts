export class NavigationPage {
    get backButton() {
        return $('//android.widget.ImageButton');
    }

    async saved() {
        const savedButton = await $('//android.widget.FrameLayout[@content-desc="Saved"]');
        savedButton.click();
    }

    async back() {
        // const backButton = await $('//android.widget.ImageButton');
        await this.backButton.click();
    };

    // async explore() {
    //     const exploreBtn = await $('')
    //     await exploreBtn.click();
    // };

    async save() {
        const saveButton = await $('//android.widget.TextView[@content-desc="Save"]')
        await saveButton.click();
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