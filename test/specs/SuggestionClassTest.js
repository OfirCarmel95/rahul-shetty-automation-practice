const practicePage = require('../pageObjects/PracticePage')
const expectChai = require("chai").expect
const { addStep } = require("@wdio/allure-reporter").default 

describe('Practice Page', () => {
    it('Suggestion Class Test', async () => {
        let testStep = 'opening browser'
        try {
            await browser.url("/AutomationPractice")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = "setting input value"
        try {
            await practicePage.autoCompleteInput.setValue("isr")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(2000) 
        testStep = "selecting autocomplete option"
        try {
            await practicePage.selectAutocompleteOption("Israel")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(1000)
        testStep = "asserting input value"
        try {
            await expectChai(await practicePage.autoCompleteInput.getValue()).to.eql("Israel")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })
})