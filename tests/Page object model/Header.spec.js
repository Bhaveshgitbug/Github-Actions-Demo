// @ts-nocheck

// const {test, expect} = require('@playwright/test')

export class Header{
    constructor(page){
        this.page = page;
    }

    get eleLogin(){
        const loginBtn = this.page.$("text=Log in")
        if(loginBtn != null){
            return loginBtn
        }else throw new Error("No Element")
    }
    get eleLogout(){
        const logoutBtn = this.page.$("text=v")
        if(logoutBtn != null){
            return logoutBtn
        }else throw new Error("No Element")
    }

    async clickLogin(){
        const ele = await this.eleLogin;
        await ele?.click();
    }

    async clickSignOut(){
        const ele = await this.eleLogout;
        await ele?.click();
    }
}