class PracticePage {
    get secondRadioButton() {    
        return $("input[value='radio2']")
    } 

    get autoCompleteInput(){
        return $("#autocomplete")
    }
    
    get autoCompleteOptions(){
        return $$('.ui-menu-item-wrapper')
    }

    get dropdown(){
        return $("#dropdown-class-example")
    }

    get openWindowButton(){
        return $("#openwindow")
    }

    get openTabButton(){
        return $('#opentab')
    }

    get alertButton(){
        return $("#alertbtn")
    }

    get nameField(){
        return $('#name')
    }

    get mouseHoverButton(){
        return $('#mousehover')
    }

    async selectAutocompleteOption(desiredOption){  
        await this.autoCompleteOptions.map(async option => {
            if(await option.getText() === desiredOption)
                await option.click()
        })
    }

    async selectDropdownOption(option){
        await this.dropdown.selectByVisibleText(option)
    }

    async clickOnHoverLink(linkText){
        await $(`=${linkText}`).click()
    }

}

module.exports = new PracticePage()