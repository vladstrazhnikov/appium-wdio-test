import { config } from './wdio.conf';

config.capabilities = [{
    platformName: "Android",
    "appium:deviceName": "Android_33x86",
    "appium:automationName": "UiAutomator2",
    "appium:app": __dirname + "\\Wikipedia_2.7.50426.apk",
}];