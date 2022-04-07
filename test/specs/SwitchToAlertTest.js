const practicePage = require("../pageObjects/PracticePage")
const expectChai = require('chai').expect
const { addStep } = require("@wdio/allure-reporter").default

describe('Practice Page', () => {
    it('Switch To Alert Test', async () => {
        const name = "Ofir"
        let testStep = 'opening browser'
        try {
            await browser.url("/AutomationPractice")
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'setting name field value'
        try {
            await practicePage.nameField.setValue(name)
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'clicking on alert'
        try {
            await practicePage.alertButton.click()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'asserting that alert is open'
        try {
            await expectChai(await browser.isAlertOpen()).to.be.true
            await addStep(testStep, {}, "passed")            
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'asserting that alert text'
        try {
            await expectChai(await browser.getAlertText()).to.equal(`Hello ${name}, share this practice page and share your knowledge`)
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
        testStep = 'accepting alert'
        try {
            await browser.acceptAlert()
            await addStep(testStep, {}, "passed")
        } catch (error) {
            await addStep(testStep, {}, "failed")
            throw error
        }
    })
 })