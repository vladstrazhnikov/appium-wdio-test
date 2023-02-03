export class OnBoarding {
    //skip on-boarding
     async skip () {
        const skip = await $('//android.widget.Button[@resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]');
        await skip.click();
    }
}
