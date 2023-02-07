export class SettingsPage {
    get appThemeButton(){
        return $('//android.widget.LinearLayout[@index="5"]');
    }
    
    async openAppTheme() {
        await this.appThemeButton.click();    
    }

    //app theme settings(more > settings > app theme)
    get textSizePercent (){
        return $('//android.widget.TextView[@resource-id="org.wikipedia:id/text_size_percent"]');
    }
    get increaseTextSizeButton(){
        return $('//android.widget.TextView[@resource-id="org.wikipedia:id/buttonIncreaseTextSize"]');;
    }

    get blackThemeButton(){
        return $('//android.widget.Button[@resource-id="org.wikipedia:id/button_theme_black"]');
    }

    get themeSwitcher(){
        return $('//android.widget.Switch[@resource-id="org.wikipedia:id/theme_chooser_match_system_theme_switch"]');
    }
}