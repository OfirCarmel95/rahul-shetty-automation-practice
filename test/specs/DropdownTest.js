const practicePage = require('../pageObjects/PracticePage')
const expectChai = require('chai').expect
const { addStep } = require('@wdio/allure-reporter').default 

describe('Practice Page', () => {
    it('Dropdown Test', async () => {
        const dropdownOption = 'Option3'
        let testStep = await 'opening browser'
        try {
            await browser.url("/AutomationPractice")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = await 'selecting dropdown option'
        try {
            await practicePage.selectDropdownOption(dropdownOption)
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        await browser.pause(1000)
        testStep = await 'asserting selected dropdown option'
        try {
            await expectChai(await practicePage.dropdown.getValue()).to.eql(dropdownOption.toLowerCase())
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })
})