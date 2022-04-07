const practicePage = require('../pageObjects/PracticePage')
const { addStep } = require('@wdio/allure-reporter').default

describe('Practice Page', () => {
    it('Hover Test', async () => {
        let testStep = 'opening browser'
        try {
            await browser.url('/AutomationPractice')
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = "scrolling to hover button"
        try {
            await practicePage.mouseHoverButton.scrollIntoView()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = "hovering"
        try {
            await practicePage.mouseHoverButton.moveTo()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'clicking on hover button option'
        try {
            await practicePage.clickOnHoverLink("Topbxfgs")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = "asserting page url"
        try {
            await expect(await browser).toHaveUrlContaining("#top")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })    
})