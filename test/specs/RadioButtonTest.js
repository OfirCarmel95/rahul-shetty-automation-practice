const practicePage = require('../pageObjects/PracticePage')
const { addStep } = require('@wdio/allure-reporter').default

describe('Practice Page', () => {
    it('Radio Button Test', async () => {
        let testStep = 'opening browser'
        try {
            await browser.url("/AutomationPractice")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = "clicking on radio button"
        try {
            await practicePage.secondRadioButton.click()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })
})