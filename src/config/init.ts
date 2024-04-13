
import { CookieFilePath } from '@/utils/browser/m_cookie.js';
import { getCookiesPath } from './pathFolder/otherPath.js';

export default function _(){
    CookieFilePath.getInstance().setCookiesPath(getCookiesPath());
    console.log("getCookiesPath()",getCookiesPath())
    console.log("CookieFilePath.getInstance().getCookiesPath()",CookieFilePath.getInstance().getCookiesPath())
    return 0;
}