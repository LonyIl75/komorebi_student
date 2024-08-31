import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js"
import {req_login as df_req_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js"
import {res_login as df_res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js"

export class req_login extends df_req_login<_passAndEmail> {}
export class res_login extends df_res_login {}