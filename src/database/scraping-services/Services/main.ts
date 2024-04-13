import { serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import pourdebonLocalAndRemoteDatabase from "./pourdebon/database.js";

export const json_localAndRemoteDatabase = {
    [serviceName_pourdebon] :  pourdebonLocalAndRemoteDatabase,
}