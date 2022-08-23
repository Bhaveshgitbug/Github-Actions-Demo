// @ts-check

const { test, expect } = require('@playwright/test')
// const{Header} = require('./Header.spec');
export class loginPage {
    constructor(page) {
        this.page = page
    }

    get eleEmailTextField() {
        const elename = this.page.$('input[name="email"]');
        return elename;
    }
    get elePassTextField() {
        return this.page.$('input[name="password"]');

    }
    get eleLoginBtn() {
        return this.page.$('//*[text()="LOGIN"]');
    }

    async enteruserName(name){
        const ele = await this.eleEmailTextField;
        await ele?.fill(name)
    }
    async enteruserPass(name){
        const ele = await this.elePassTextField;
        await ele?.fill(name)
    }
    async clickLoginBtn(){
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }
}
