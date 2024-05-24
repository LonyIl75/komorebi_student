
import getCurrentLine from "get-current-line"
import { time } from '@shared/hours.js';

export const timer_human_isdebugging = (): boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return false; };

export const typing_time = (text: string,complexity: number ): number =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return text.length * 4 * complexity ; };
export const select_time = (): number =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return 3000 ; };
export const submit_time = (): number =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return select_time()*0.9 ; };


export const human_select = () : Promise<boolean> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/return time.timer(select_time()); };
export const human_submit = () : Promise<boolean> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/return time.timer(submit_time());};
export const human_clicking = () : Promise<boolean> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/return time.timer(submit_time());};
export const human_typing = (txt: string , complexity: number ): Promise<boolean> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return time.timer(typing_time(txt , complexity)) };

