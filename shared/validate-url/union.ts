import { t_alphabet, t_strDigit } from "@shared/type.js"

export type t_union_tld_common ="com"|"org"|"net"|"co"|"at"
export type t_union_tld_country = "fr"|"jp"|"br"|"uk"|"ru"|"ca"|"us"|"de"|"it"|"cn"|"es"|"eu"//|"nl"|"tk"|"ga"|"cf"|"es"|"pl"|"au"|"nl"|"in"|"eu"|"ch"|"id"|"kr"|"cz"|"mx"|"be"|"se"
export type t_union_tld_gov = "education"|"edu"|"gov"|"mil"|"geo"|"maps"
export type t_union_tld_entreprise = "inc"|"aero"|"biz"|"shop"
export type t_union_tld_dev = "git"|"aws"|"bitnet"|"gnu"|"cat"|"tor"|"pod"|"oss"|"onion"
export type t_union_tld_dev_network = "arpa"|"internal"|"intranet"|"lan"|"home"|"private"|"corp"|"local"|"localhost"
export type t_union_tld_crypto = "eth"|"btc"|"coin"|"crypto"|"lib"|"zil"|"bit"|"vamp"|"vps"|"emc"|"key"|"zkey"
export type t_union_tld_dev_other = "dev"|"app"|"io"|"web"|"page"|"example"|"invalid"|"test"|"null"|"chat"|"open"
export type t_union_tld_other = "io"|"me"|"tv"|"online"|"xyz"|"icu"|"info"|"blog"|"top"|"live"|"wiki"|"site"
export type t_union_tld_df = t_union_tld_common|t_union_tld_country|t_union_tld_gov|t_union_tld_other
export type t_union_tld_top100=|"tr"|"tw"|"al"|"ua"|"ir"|"vn"|"cl"|"sk"|"ly"|"cc"|"to"|"no"|"fi"|"us"|"pt"|"dk"|"ar"|"hu"|"tk"|"gr"|"il"|"news"|"ro"|"my"|"biz"|"ie"|"za"|"nz"|"sg"|"ee"|"th"|"io"|"xyz"|"pe"|"bg"|"hk"|"rs"|"lt"|"link"|"ph"|"club"|"si"|"site"|"mobi"|"by"|"cat"|"wiki"|"la"|"ga"|"xxx"|"cf"|"hr"|"ng"|"jobs"|"online"|"kz"|"ug"|"gq"|"ae"|"is"|"lv"|"pro"|"fm"|"tips"|"ms"|"sa"|"app"


export type t_union_urlReservedChar = "!"|"#"|"$"|"&"|"'"|"("|")"|"*"|"+"|","|"/"|":"|";"|"="|"?"|"@"|"["|"]"
export type t_union_urlUnReservedChar_specialChar = "-"|"_"|"."|"~" 
export type t_union_urlUnReservedChar = t_alphabet|t_strDigit |t_union_urlUnReservedChar_specialChar
