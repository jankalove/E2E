# E2E Tests
## selenium+mocha+chai 

В проекте используются следующие технологии: **mocha, nodejs, chai, allure.**

Для сборки и запуска необходимо скачать и установить [nodejs](https://nodejs.org/en/) и [npm](https://docs.npmjs.com/).

В папке **web_ui** необходимо выполнить команды для установки и старта selenium-standalone:
```
npm install
npm run selenium-install 
npm run selenium-start   
```
*Иногда возникают проблемы с запуском Selenium из-за того, что на машине запущены java процессы. Необходимо убить такие процессы через диспетчер задач*

*Если Selenium установлен у вас локально, то вы можете не выполнять команды 2 и 3, а запустить selenium на своей машине командой:*
```
selenium-standalone start
```  
После успешной установки пакетов и запуска Selenium в другом окне cmd в папке **web_ui** необходимо выполнить команду: 
``` 
npm run test:e2e
``` 
Данная команда запускает все тесты с расширением spec.js в папке e2e. Происходит вывод в консоль при помощи **mocha-reporter**, перед каждым тест-сьютом Selenium запускает новое окно браузера, в конце закрывает его.

Если вы хотите настроить свой проект в TeamCity, то можно использовать **mocha-allure-teamcity-reporter**, который уже добавлен к проекту. Настроив соответствующие шаги в TeamCity вы сможете получать отчеты по тестовым сборкам со скриншотами к тестам со статусом failed (функция для получения скриншотов уже есть в проекте). Тесты в TeamCity запускаются командой: 
``` 
npm run test:e2e:teamcity
``` 
Результаты по тестам попадают в папку **web_ui/allure-results.**

---------------------------------------------------------------------------------------------------------------

There are technologies in this project: **mocha, nodejs, chai, allure.**

For building and running project, you must download and install [nodejs](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/).

In the folder **web_ui** use the following commands for installing and running selenium-standalone:
``` 
npm install
npm run selenium-install 
npm run selenium-start 
``` 
*Sometimes there are problems with the launch of Selenium due to the fact that java processes are running in your machine. You must kill these processes using Task Manager*

*If you have Selenium installed locally, you can run Selenium on your machine instead of commands 2 and 3, run selenium-standalone:
```
selenium-standalone start
```  
After successfully installing packages and running Selenium in another cmd window in the **web_ui** folder, you must run the command:
```
npm run test:e2e
``` 
This command runs all tests with the spec.js extension in e2e folder. 

The output is displayed in the console using **mocha-reporter**, before each test suite Selenium starts a new browser window, closes it at the end.
If you want to customize your project in TeamCity, you can use **mocha-allure-teamcity-reporter**, which is already added to the project. By configuring the appropriate steps in TeamCity you will be able to receive reports on test assemblies with screenshots to failed tests (the function for getting screenshots is already in the project). Command for running tests in TeamCity:
```
npm run test:e2e:teamcity 
```
Results in tests are in **web_ui/allure-results** folder.

