import { randomIntFromInterval } from "./m_math.js"
import getCurrentLine from "get-current-line"

const coef_milliToSec = 1000
const coef_secToMinute = 60
const coef_minuteToHour = 60
const coef_hourToDay = 24

const secondToMilli = (seconds: number=1) => seconds * coef_milliToSec
const minuteToMilli = (minutes: number=1) => secondToMilli(minutes * coef_secToMinute)
const hourToMilli = (hours: number=1) => minuteToMilli(hours * coef_minuteToHour)
const dayToMilli = (days: number=1) => hourToMilli(days * coef_hourToDay)
const hoursToSecond = (hours:number) => hours*coef_minuteToHour*coef_secToMinute
const getTimeNow = () => Date.now()
const getSecTimeNow = () => getTimeNow()/coef_milliToSec
const getMinuteTimeNow = () => getSecTimeNow()/coef_secToMinute
const getHourTimeNow = () => getMinuteTimeNow()/coef_minuteToHour



export const hours = { 
    secondToMilli,
    minuteToMilli,
    hourToMilli,
    dayToMilli,
    hoursToSecond,
    getTimeNow,
    getSecTimeNow,
    getMinuteTimeNow,
    getHourTimeNow
}


const timer = (num:number ): Promise<boolean> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return new Promise(res =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        setTimeout(() =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            res(true);
        }, num + randomIntFromInterval(-1000, 1000));
    });
  };
  

export const time = {
    timer
}
