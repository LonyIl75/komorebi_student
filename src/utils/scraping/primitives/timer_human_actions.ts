
import { time } from '@shared/hours.js';

export const timer_human_isdebugging = (): boolean => { return false; };

export const typing_time = (text: string,complexity: number ): number => { return text.length * 4 * complexity ; };
export const select_time = (): number => { return 3000 ; };
export const submit_time = (): number => { return select_time()*0.9 ; };


export const human_select = () : Promise<boolean> => {return time.timer(select_time()); };
export const human_submit = () : Promise<boolean> => {return time.timer(submit_time());};
export const human_clicking = () : Promise<boolean> => {return time.timer(submit_time());};
export const human_typing = (txt: string , complexity: number ): Promise<boolean> => { return time.timer(typing_time(txt , complexity)) };

