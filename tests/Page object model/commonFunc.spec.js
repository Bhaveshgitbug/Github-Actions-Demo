// @ts-nocheck

const { test } = require('@playwright/test')

export class CommonFunctions {

    constructor(page) {
        this.page = page
    }

    get toaster() {
        return this.page.$('div[role="alertdialog"]')
    }
}