const practicePage = require("../pageObjects/PracticePage")
const { addStep } = require("@wdio/allure-reporter").default

describe('Practice Page', () => {
    it('Switch Tab Test', async () => {
        let testStep = 'opening browser'
        try {
            await browser.url("/AutomationPractice")            
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        const automationPracticePageUrl = await browser.getUrl()
        const HomePageUrl = await practicePage.openTabButton.getAttribute("href")
        testStep = 'clicking on open tab button'
        try {            
            await practicePage.openTabButton.click()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(5000)
        testStep = 'switching to tab'
        try {
            await browser.switchWindow(HomePageUrl)
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'closing new tab'
        try {
            await addStep(testStep, {}, "passed")
            await browser.closeWindow()
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'switching back to previous tab'
        try {
            await browser.switchWindow(automationPracticePageUrl)
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(2000)
    })
 })