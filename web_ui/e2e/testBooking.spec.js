
// setTimeout(function() { debugger; }, 4000); //delay the loading element on the page

import {
    setDriver,
    sleep,
    elementTextExpect,
    waitForElement,
    openProject,
    click,
    clicks,
    sendKeys,
    waitElementIsNotExist,
    login
} from './utils/actions';

import * as c from './constants';

import webdriver, { until, By, Key } from 'selenium-webdriver';
const test = require('selenium-webdriver/testing');

import chaiWebdriver from 'chai-webdriver';

import chai from 'chai';
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

test.describe('Booking', function () {
    let driver;

    test.before(function* () {
        const chromeCapabilities = webdriver.Capabilities.chrome();
        const chromeOptions = {
            'args': ['--test-type', '--disable-notifications', '--disable-plugins', '--disable-extensions ', '--start-maximized']
        };
        chromeCapabilities.set("webdriver.chrome.driver","/path to/chromedriver.exe", chromeOptions);
        driver = new webdriver.Builder()
            .withCapabilities(chromeCapabilities)
            .usingServer(c.hub).build();

        setDriver(driver);
        chai.use(chaiWebdriver(driver));

        console.log("Selenium Webdriver Chrome Started");
        yield driver.get(c.serverUri); 
        yield driver.executeScript("window.resizeTo(1920, 1080);");
    });

    test.afterEach(function () { //function for take screenshot when test failed, this must be used with allure-reporter plugin, look in packege.json :"test:e2e:teamcity"
        if (this.currentTest.state == 'failed') {
            const test = this.currentTest;
            driver.takeScreenshot().then(function (data) {
				allure.createAttachment("Screenshot", new Buffer(data, "base64"));
            });
        }
    });


    test.it('Open project', function* () {
        this.timeout(90000);
        console.log("\n Open project");
        yield* openProject();
    });


    test.it('Search tour', function* () {
        this.timeout(40000);
        console.log("\n Search tour");     
        yield* sendKeys(By.id(c.INPUT_SEARCH), 'нью', 1);
        yield* clicks([By.css(c.SELECT_CITY),By.css(c.DAY_TODAY), By.css(c.BUTTONFORSEARCH)], .5);// select city, date and press button "Check prices"
        yield* waitForElement(By.id(c.HOTELES_LIST));
    });

    test.it('Login', function* () {
        this.timeout(40000);
        console.log("\n Login");      
        yield* login();
    });


    test.after(function* () {
        console.log("\n Selenium Webdriver Chrome Shutdown");
        yield driver.quit();
    });
});