import getCurrentLine from "get-current-line"
import { t_strRegex } from "./_regexp.js"
import {convertStrToRegexStr,moreThenOneStrRegex, ordinalSuffixRegex, strRegexToMaybePluralStrRegex } from "./m_regex.js"
import { getUnionNonMatchingGroups, embedCapturingGroupStrOrRegex, embedNonCapturingGroupStrOrRegex, unionRegexs, embedOptionalStrOrRegex, embedOptNonCapturingGroupStrOrRegex } from "./m_regex_prefixAndSuffix.js"
import { UnionToArray } from "./type.js"

export const _arr_priceUnitSymbol = ["€","$","£","₩","¥","₽"] as const // A FAIRE : str to strRegex rather than escape
export const arr_priceUnitSymbol : ["€","\\$","£","₩","¥","₽"] = _arr_priceUnitSymbol.map((str)=>convertStrToRegexStr(str)) as any
const _strRegexPriceUnitSymbol = getUnionNonMatchingGroups(...arr_priceUnitSymbol)
export const strRegexPriceUnitSymbol = embedCapturingGroupStrOrRegex(_strRegexPriceUnitSymbol,true)

export const arr_priceUnitISO = ["EUR","USD","GBP","KRW","CNY","JPY","RUB"] as const // A FAIRE : str to strRegex rather than escape
const _strRegexPriceUnitISO = getUnionNonMatchingGroups(...arr_priceUnitISO)
export const strRegexPriceUnitISO = embedCapturingGroupStrOrRegex(_strRegexPriceUnitISO,true)

export const mappingPriceUnitSymbolToISO = {
    [_arr_priceUnitSymbol[0]]:arr_priceUnitISO[0],
    [_arr_priceUnitSymbol[1]]:arr_priceUnitISO[1],
    [_arr_priceUnitSymbol[2]]:arr_priceUnitISO[2],
    [_arr_priceUnitSymbol[3]]:arr_priceUnitISO[3],
    [_arr_priceUnitSymbol[4]]:arr_priceUnitISO[4],
    // [_arr_priceUnitSymbol[4]]:arr_priceUnitISO[5],
    [_arr_priceUnitSymbol[5]]:arr_priceUnitISO[6],
} as const



export const _arr_priceUnitStringSingle =  ["euro","dollar","pound","won","yuan","yen","ruble"] as const
const _arr_priceUnitStringMaybePlural =  (_arr_priceUnitStringSingle).map(strRegexToMaybePluralStrRegex) 
const arr_priceUnitString =  _arr_priceUnitStringMaybePlural as UnionToArray<(typeof _arr_priceUnitStringMaybePlural)[number]>

const _strRegexPriceUnitString = getUnionNonMatchingGroups(...arr_priceUnitString)
export const strRegexPriceUnitString = embedCapturingGroupStrOrRegex(_strRegexPriceUnitString,true)

export const strRegexPriceUnit = embedNonCapturingGroupStrOrRegex(unionRegexs(strRegexPriceUnitSymbol,strRegexPriceUnitString),true)

export const arr_separatorPrice = [/*",",*/"\\." ] as const
export const _strRegexSeparatorPrice = getUnionNonMatchingGroups(...arr_separatorPrice)

export const strRegexNumberUnit = `(?:(\\d+)(?:\\s+(\\d+))?)+(?:\\s*(${_strRegexSeparatorPrice})\\s*(\\d+))?`as const
export const strRegexEndNumberUnit = ``as const
export const getStrRegexUnitExpression = <TStrRegexExp extends string , TUnit extends string >(strRegexExp : TStrRegexExp , unit:TUnit) =>{ 
    return embedNonCapturingGroupStrOrRegex(getUnionNonMatchingGroups(`${unit}\\s*${strRegexExp}`,`${strRegexExp}\\s*${unit}`),true) 
}
export const strRegexPrice = getStrRegexUnitExpression(strRegexNumberUnit,strRegexPriceUnit)

export const arr_massUnit = ["gr","(?:m|k)?g"]as const 
export const strRegexMassUnit =  getUnionNonMatchingGroups(...arr_massUnit)
export const strRegexVolumeUnit = "(?:m|c)?l" as const 
export const arr_unit = [strRegexMassUnit,strRegexVolumeUnit] as const 
export const _strRegexUnitQuantity = getUnionNonMatchingGroups(...arr_unit)
export const strRegexUnitQuantity = embedCapturingGroupStrOrRegex(_strRegexUnitQuantity,true)

export const strRegexQuantity = getStrRegexUnitExpression(strRegexNumberUnit,strRegexUnitQuantity)



    export const arr_inBetween = ["\/","à","-"] as const
    const _strRegexInBetween = getUnionNonMatchingGroups(...arr_inBetween)
    export const strRegexInBetween = embedCapturingGroupStrOrRegex(_strRegexInBetween,true)
    export const getInBetweenNumberPieceStringUnit = <TStrRegexUnit extends t_strRegex >(strRegexUnit:TStrRegexUnit)=>{ 
       
        return embedNonCapturingGroupStrOrRegex(`\\d+\\s*${strRegexInBetween}\\s*\\d+\\s*${strRegexUnit}` as const,true)
    }

    export const getInBetweenNumberStringUnit = <TStrRegexUnit extends t_strRegex >(strRegexUnit:TStrRegexUnit)=>{ 
       
        return embedNonCapturingGroupStrOrRegex(`${strRegexNumberUnit}\\s*${strRegexInBetween}\\s*${strRegexNumberUnit}\\s*${strRegexUnit}` as const ,true) 
    }

    export const arr_multiplePiece = ["lot","sachet","box","panier"] as const

    export const arr_aproxType_onlyPiece = ["part","personnes","portion"] as const
    export const arr_aproxType_notOnlyPiece = [...arr_multiplePiece] as const

    export const arr_aproxType = [...arr_aproxType_notOnlyPiece,...arr_aproxType_onlyPiece] as const
    const _strRegexAproxType = getUnionNonMatchingGroups(...arr_aproxType)
    export const strRegexAproxType = embedCapturingGroupStrOrRegex(_strRegexAproxType,true)

    export const arr_aproxPrefix = ["~","env"] as const
    const _aproxPrefixStrRegex = getUnionNonMatchingGroups(...arr_aproxPrefix)
    export const aproxPrefixStrRegex = embedCapturingGroupStrOrRegex(_aproxPrefixStrRegex,true)
    export const arr_aproxPrefixOnlyPiece = ["de"] as const
    const _aproxPrefixOnlyPieceStrRegex =  getUnionNonMatchingGroups(...arr_aproxPrefix,...arr_aproxPrefixOnlyPiece)
    export const aproxPrefixOnlyPieceStrRegex = embedCapturingGroupStrOrRegex(_aproxPrefixOnlyPieceStrRegex,true)
    export const getAproxOnlyPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
                           
        return embedNonCapturingGroupStrOrRegex(`${embedOptionalStrOrRegex(aproxPrefixOnlyPieceStrRegex,true)}\\s*${getInBetweenNumberPieceStringUnit(_strRegexUnit)}` as const,true)
    }

    export const getAproxNotPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
                           
        return embedNonCapturingGroupStrOrRegex(`${aproxPrefixStrRegex}\\s*${getInBetweenNumberStringUnit(_strRegexUnit)}` as const,true)
    }


    export const getAproxNotOnlyPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
                           
        return unionRegexs(getAproxOnlyPieceStringUnit(_strRegexUnit),getAproxNotPieceStringUnit(_strRegexUnit)) 
    }

    const _strRegexAproxOnlyPiece = getUnionNonMatchingGroups(...arr_aproxType_onlyPiece)
    export const strRegexAproxOnlyPiece = embedCapturingGroupStrOrRegex(_strRegexAproxOnlyPiece,true)
    const _strRegexAproxNotOnlyPiece = getUnionNonMatchingGroups(...arr_aproxType_notOnlyPiece)
    export const strRegexAproxNotOnlyPiece = embedCapturingGroupStrOrRegex(_strRegexAproxNotOnlyPiece,true)

    export const aproxOnlyPieceStringUnit = getAproxOnlyPieceStringUnit(strRegexAproxOnlyPiece)
    export const aproxNotOnlyPieceStringUnit = getAproxNotOnlyPieceStringUnit(strRegexAproxNotOnlyPiece)

    export const arr_articleMultiplePiece = ["de"] as const 
    const _strRegexArticleMultiplePiece = getUnionNonMatchingGroups(...arr_articleMultiplePiece)
    export const strRegexArticleMultiplePiece = embedCapturingGroupStrOrRegex(_strRegexArticleMultiplePiece,true)
    const _strRegexMultiplePiece = getUnionNonMatchingGroups(...arr_multiplePiece)
    export const strRegexMultiplePiece = embedCapturingGroupStrOrRegex(_strRegexMultiplePiece,true)

    export const getPluralNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
       
        return  embedNonCapturingGroupStrOrRegex(`${moreThenOneStrRegex}\\s*${_strRegexUnit}s` as const ,true)
    }


    export const getStrRegexMultiplePieceExp = <TStrRegexUnitPiece extends t_strRegex ,TStrRegexMultiplePiece extends t_strRegex = typeof strRegexMultiplePiece>(_strRegexUnitPiece:TStrRegexUnitPiece,_strRegexMultiplePiece :TStrRegexMultiplePiece = strRegexMultiplePiece as any )=>{                      
        return embedNonCapturingGroupStrOrRegex(`${_strRegexMultiplePiece}\\s*${embedOptionalStrOrRegex(strRegexArticleMultiplePiece,true)}\\s*${getPluralNumberedStringUnit(_strRegexUnitPiece)}` as const,true)
    }
    
    export const getStrRegexBatchQuantityExp = <TStrRegexUnit extends t_strRegex ,TStrRegexMultiplePiece extends t_strRegex = typeof strRegexMultiplePiece >(_strRegexUnit:TStrRegexUnit,_strRegexMultiplePiece: TStrRegexMultiplePiece=strRegexMultiplePiece as any)=>{                      
        return embedNonCapturingGroupStrOrRegex(`${embedOptNonCapturingGroupStrOrRegex(`${_strRegexMultiplePiece}\\s*${strRegexArticleMultiplePiece}`,true)}\\s*)?${strRegexNumberUnit}\\s*${_strRegexUnit}s` as const,true)
    }   

    const arr_stringUnitDf = ["unité","pièce"] as const 
    const _strRegexStringUnitDf = getUnionNonMatchingGroups(...arr_stringUnitDf)
    export const strRegexStringUnitDf = embedCapturingGroupStrOrRegex(_strRegexStringUnitDf,true)

    const arr_stringUnitLegume = ["tête","botte"] as const 
    const _strRegexStringUnitLegume = getUnionNonMatchingGroups(...arr_stringUnitLegume)
    export const strRegexStringUnitLegume = embedCapturingGroupStrOrRegex(_strRegexStringUnitLegume,true)

    export const strRegexStringUnit = embedNonCapturingGroupStrOrRegex(unionRegexs(strRegexStringUnitDf,strRegexStringUnitLegume),true)

    export const strRegexUnit = embedNonCapturingGroupStrOrRegex(unionRegexs(strRegexUnitQuantity,strRegexAproxType,strRegexStringUnit),true)
    export const getSingelNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
       
        return  embedNonCapturingGroupStrOrRegex(`1\\s*${_strRegexUnit}` as const,true)
    }

    export const getNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
       
        return  unionRegexs(getPluralNumberedStringUnit(_strRegexUnit),getSingelNumberedStringUnit(_strRegexUnit))
    }

    export const getDividedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{ 
       
        return embedNonCapturingGroupStrOrRegex(`\\d\/\\d${embedOptionalStrOrRegex(ordinalSuffixRegex,true)}\\s*${_strRegexUnit}` as const,true)
    }

    export const dividedStrRegex = getDividedStringUnit(strRegexStringUnitDf)

    export const arr_timesChar = ["x","*"] as const
    export const strRegexTimesChar = getUnionNonMatchingGroups(...arr_timesChar)

    export const _getTimesStrRegex = <TStrRegex extends t_strRegex >(strRegex:TStrRegex)=>{ 
       
        return embedNonCapturingGroupStrOrRegex(`${strRegexTimesChar}\\s*${strRegex}` as const,true)
    }
    //is x 4 sachets

    export const getTimesStrRegex = <TStrRegex extends t_strRegex >(strRegex:TStrRegex)=>{ 
       
        return embedNonCapturingGroupStrOrRegex(`${moreThenOneStrRegex}\\s*${_getTimesStrRegex(strRegex)}` as const,true)
    }
    //PAS FAIS : (correctement) : 4 x 125 g


//PAS FAIS :panier/box



export const arr_size = ["très petit","petit","moyen","gros","extra gros","jumbo"] as const
export const strRegexStringSize = getUnionNonMatchingGroups(...arr_size)
export const arr_SizeUnit = ["calibre"] as const 
const strRegexStringSizeUnit =  getUnionNonMatchingGroups(...arr_SizeUnit)

export const strRegexSize = embedNonCapturingGroupStrOrRegex(`${strRegexStringSize}\\s*${strRegexStringSizeUnit}` as const,true)

export const arr_per = ["/"," ",""] as const 
const _strRegexPer = getUnionNonMatchingGroups(...arr_per)
export const strRegexPer = embedCapturingGroupStrOrRegex(_strRegexPer,true)
export const strRegexPricePerUnit = `${strRegexPrice}\\s*${strRegexPer}\\s*${strRegexUnit}`as const 
//"lot|sachet ((?:~)|(?:env))?(?:(\\d+\/\\d+)|(${strRegexBegNumberUnit}\/${strRegexBegNumberUnit}\\s*${strRegexUnitQuantity}))
//"lot|sachet|part (\((?:~)|(?:env))?(?:(\\d+\/\\d+)|(${strRegexBegNumberUnit}\/${strRegexBegNumberUnit}\\s*${strRegexUnitQuantity})\))

//A:/barquette/emballé/filet