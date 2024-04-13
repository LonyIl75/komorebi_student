

//import TimeoutSettings from "puppeteer";
import { PuppeteerLifeCycleEvent, WaitForOptions } from "puppeteer";

/*
Describe the default values of puppeteer functions such as the maximum waiting time
*/

// Option for selectors 
export interface selectorsOptions {
    timeout: number;
    visible?: boolean;
    hidden?: boolean;
    signal?: AbortSignal;
}

//TODO : df json class/interface
export const df_timeout  : number  = 30000 //new TimeoutSettings().timeout();
export const df_selectorsOptions : selectorsOptions ={timeout: df_timeout};

export function getDfSelectorsOptions  () : selectorsOptions {
    return {timeout: 30000 };
}


//Goto :

export const df_timeout_navigation : number = 30000 //new TimeoutSettings().navigationTimeout();
export const df_waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[] = "load" ; //goto in Context.ts const {waitUntil = 'load',timeout = this._timeoutSettings.navigationTimeout(),} = options

export const df_waitForOptions : WaitForOptions = {timeout: df_timeout_navigation, waitUntil: df_waitUntil,};

