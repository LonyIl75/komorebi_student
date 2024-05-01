import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_booksToscrape_style, getBooksToscrapeHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"
import { idRoutes_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { majFirstChar } from "@shared/m_string.js"

export const str_books = idRoutes_booksToscrape[2] 
export type t_str_books = typeof str_books

export const str_Books = majFirstChar(str_books)
export type t_str_Books = typeof str_Books

export const booksToscrape_books_rootClassName = `${str_Books}${rootClassName}` as const
export type t_booksToscrape_books_rootClassName = typeof booksToscrape_books_rootClassName
export const rootBooksBooksToscrapeChildType = StrChildType.compClassnameToChildType(booksToscrape_books_rootClassName)


type t_base_union =  t_booksToscrape_books_rootClassName
const booksToscrape_books_base_helpers = getBooksToscrapeHelpers<t_base_union>()


export const booksToscrape_books_mainOfComponents: IComponent<t_rootClassName,t_booksToscrape_books_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...booksToscrape_books_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
                {selector:Selector.cst_onePropAndTagg(classProp,'container-fluid page',"div",containOp)},
                {selector:Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp)}
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootBooksBooksToscrapeChildType , ids : empty_ids}],
}

export const root_booksPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_booksToscrape_books_rootClassName>(booksToscrape_books_mainOfComponents)
export const root_booksPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_booksToscrape_books_rootClassName>(booksToscrape_books_mainOfComponents)
const root_booksPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_booksToscrape_books_rootClassName>(booksToscrape_books_mainOfComponents)[0]]
export const root_booksPage_child_selectors : t_childSelector = root_booksPage_childs_selectors[0]
const root_booksPage_childs_components : t_childs_components<t_booksToscrape_books_rootClassName> = Component.getChilds_components(booksToscrape_books_mainOfComponents)
const root_booksPage_child_component : ITypeChilds<t_booksToscrape_books_rootClassName> = root_booksPage_childs_components[0]
export const root_booksPage_child_type : StrChildType.t_childType<t_booksToscrape_books_rootClassName> = root_booksPage_child_component.type
