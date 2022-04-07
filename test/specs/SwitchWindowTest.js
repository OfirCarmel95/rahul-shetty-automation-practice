const practicePage = require("../pageObjects/PracticePage")
const { addStep } = require("@wdio/allure-reporter").default

describe('Practice Page', () => {
    it('Switch Window Test', async () => {
        let testStep = "opening browser"
        try {
            await browser.url("/AutomationPractice")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'clicking on open window button'
        try {
            await addStep(testStep, {}, "passed")
            await practicePage.openWindowButton.click()
        } catch (error) {
            await addStep(testStep, {}, "failed")            
            throw error
        }
        let handles = await browser.getWindowHandles() 
        testStep = 'switching to new window'
        try {
            await browser.switchToWindow(handles[1])
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'maximizing new window'
        try {
            await browser.maximizeWindow()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(2000)
        testStep = 'closing new window'
        try {
            await browser.closeWindow()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'switching back to prevois window'
        try {
            await browser.switchToWindow(handles[0])
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })
 })