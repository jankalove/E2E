import {Key, By, ActionSequence, until} from 'selenium-webdriver';

import chai from 'chai';
import chaiAsPromised from "chai-as-promised";
import * as c from '../constants';


chai.use(chaiAsPromised);
const {expect} = chai;

let driver;


export const setDriver = (d) => {
  driver = d;
};

export function* sleep(sec) {
  yield driver.sleep(sec*1000);
}


function* sendKey(by, key, delay=.3) {
  if(by == null)
    yield actionSequence().sendKeys([key]).perform();
  else
    yield driver.findElement(by).then(element => element.sendKeys(key));
  yield* sleep(delay);
}


export function* sendKeys(by=null, keys='', delay=.3) {// like sendkey, but for array elements
  const isKey = (key) => {
    for(let prop in Key)
      if(Key[prop] == key) return true;
    return false;
  };
  if(Array.isArray(keys)) {
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if(isKey(key))
        yield* sendKey(by, key, delay);
      else
        for(let j = 0; j < key.length; j++)
          yield* sendKey(by, key.charAt(j), delay);
    }
  }
  else yield* sendKey(by, keys, delay);
}


export function* wait(until, sec) {
  yield driver.wait(until, sec*1000);
}

function actionSequence() {
  return new ActionSequence(driver);
}

export function* elementTextExpect(by) {// for compare text and selector 
  const element = yield driver.findElement(by);
  const text = yield element.getText();
  return yield expect(text);
}

export function* titleExpect() {// check title
  const title = yield driver.getTitle();
  return yield expect(title);
}

export function* waitForElement(by, sec = 40){// wait for until element is visible in the page
 yield driver.wait(until.elementLocated(by), sec * 1000);
}


export function* click(by) {
  yield driver.findElement(by).click();

}

export function* clicks(by, delay = .5) {// like click, but for array elements
  if (!Array.isArray(by)) {
    by = [by];
  }
  for (let i = 0; i < by.length; i++) {
    yield driver.findElement(by[i]).click();
    yield* sleep(delay);

  }

}

// function for waiting load start page of your project
export function* openProject(){
 yield* waitForElement(By.id(c.LOGO));
}

// login
export function* login() {
  yield* clicks([By.linkText('Войти в аккаунт'),By.css(c.BUTTONFORLOGIN)], .1);
  yield* sendKeys(By.css(c.INPUT_LOGIN), 'shishkinaiana6@gmail.com', .1);
  yield* sendKeys(By.css(c.INPUT_PASSWORD), ['12345678S'], .1);
  yield* click(By.css(c.BUTTONFORLOGIN));
  yield* waitForElement(By.css(c.USERNAME));
}

// logout
export function* logout() {
 yield* click(By.css(c.USER_PROFILE));
 yield* waitForElement(By.css(c.PROFILE_MENU));
 yield* click(By.css(c.BUTTONFORLOGOUT));
 yield* waitForElement(By.xpath(c.LOGOUTSUCCESS));
}

