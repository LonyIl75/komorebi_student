import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { str_login } from "../Services/src/booksToscrape/Services/Login/human-actions.js";
import { str_main } from "../Services/src/booksToscrape/Services/Main/human-actions.js";
import { str_books } from "../Services/src/booksToscrape/Services/Books/human-actions.js";
import { BooksToscrapeServiceBooks } from "../Services/src/booksToscrape/Services/Books/Books.js";
import { BooksToscrapeServiceLogin } from "../Services/src/booksToscrape/Services/Login/Login.js";
import { BooksToscrapeServiceMain } from "../Services/src/booksToscrape/Services/Main/Main.js";

export const json_serviceRoute = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :{
      [str_login]:BooksToscrapeServiceLogin,
      [str_main]:BooksToscrapeServiceMain,
      [str_books]:BooksToscrapeServiceBooks,
    }
  }