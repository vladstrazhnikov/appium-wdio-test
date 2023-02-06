export class OnBoardingPage {
    //skip on-boarding
    get skipButton() {
        return $('//android.widget.Button[@resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]');
    }

    async skipOnBoarding () {
        await this.skipButton.click();
    }
}
