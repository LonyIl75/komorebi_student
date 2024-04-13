import {embedGroupStrRegex, embedNonCampturingGroupStrRegex, embedOptional, embedOptionalNonCampturingGroupStrRegex, getUnionNonMatchingGroups, moreThenOneStrRegex, ordinalSuffixRegex, strRegexToMaybePluralStrRegex, t_arr_embedNonCampturingGroupStrRegex, t_strRegex, unionRegexs } from "./m_regex.js"
import { UnionToArray } from "./type.js"

export const arr_priceUnitSymbol = ["€","$",] as const
const _strRegexPriceUnitSymbol = getUnionNonMatchingGroups(...arr_priceUnitSymbol)
export const strRegexPriceUnitSymbol = embedGroupStrRegex(_strRegexPriceUnitSymbol)

export const _arr_priceUnitStringSingle =  ["euro","dollar"] as const
const _arr_priceUnitStringMaybePlural =  (_arr_priceUnitStringSingle).map(strRegexToMaybePluralStrRegex) 
const arr_priceUnitString =  _arr_priceUnitStringMaybePlural as UnionToArray<(typeof _arr_priceUnitStringMaybePlural)[number]>

const _strRegexPriceUnitString = getUnionNonMatchingGroups(...arr_priceUnitString)
export const strRegexPriceUnitString = embedGroupStrRegex(_strRegexPriceUnitString)

export const strRegexPriceUnit = embedNonCampturingGroupStrRegex(unionRegexs(strRegexPriceUnitSymbol,strRegexPriceUnitString))

export const strRegexNumberUnit = `(?:(\\d+)(?:\\s+(\\d+))?)+(?:\\s*(,)\\s*(\\d+))?`as const
export const strRegexEndNumberUnit = ``as const
export const getStrRegexUnitExpression = <TStrRegexExp extends string , TUnit extends string >(strRegexExp : TStrRegexExp , unit:TUnit) => {
    return `${strRegexExp}\\s*${unit}` as const 
}
export const strRegexPrice = getStrRegexUnitExpression(strRegexNumberUnit,strRegexPriceUnit)

export const arr_massUnit = ["gr","(?:m|k)?g"]as const 
export const strRegexMassUnit =  getUnionNonMatchingGroups(...arr_massUnit)
export const strRegexVolumeUnit = "(?:m|c)?l" as const 
export const arr_unit = [strRegexMassUnit,strRegexVolumeUnit] as const 
export const _strRegexUnitQuantity = getUnionNonMatchingGroups(...arr_unit)
export const strRegexUnitQuantity = embedGroupStrRegex(_strRegexUnitQuantity)

export const strRegexQuantity = getStrRegexUnitExpression(strRegexNumberUnit,strRegexUnitQuantity)



    export const arr_inBetween = ["\/","à","-"] as const
    const _strRegexInBetween = getUnionNonMatchingGroups(...arr_inBetween)
    export const strRegexInBetween = embedGroupStrRegex(_strRegexInBetween)
    export const getInBetweenNumberPieceStringUnit = <TStrRegexUnit extends t_strRegex >(strRegexUnit:TStrRegexUnit)=>{
       
        return embedNonCampturingGroupStrRegex(`\\d+\\s*${strRegexInBetween}\\s*\\d+\\s*${strRegexUnit}` as const)
    }

    export const getInBetweenNumberStringUnit = <TStrRegexUnit extends t_strRegex >(strRegexUnit:TStrRegexUnit)=>{
       
        return embedNonCampturingGroupStrRegex(`${strRegexNumberUnit}\\s*${strRegexInBetween}\\s*${strRegexNumberUnit}\\s*${strRegexUnit}` as const ) 
    }

    export const arr_multiplePiece = ["lot","sachet","box","panier"] as const

    export const arr_aproxType_onlyPiece = ["part","personnes","portion"] as const
    export const arr_aproxType_notOnlyPiece = [...arr_multiplePiece] as const

    export const arr_aproxType = [...arr_aproxType_notOnlyPiece,...arr_aproxType_onlyPiece] as const
    const _strRegexAproxType = getUnionNonMatchingGroups(...arr_aproxType)
    export const strRegexAproxType = embedGroupStrRegex(_strRegexAproxType)

    export const arr_aproxPrefix = ["~","env"] as const
    const _aproxPrefixStrRegex = getUnionNonMatchingGroups(...arr_aproxPrefix)
    export const aproxPrefixStrRegex = embedGroupStrRegex(_aproxPrefixStrRegex)
    export const arr_aproxPrefixOnlyPiece = ["de"] as const
    const _aproxPrefixOnlyPieceStrRegex =  getUnionNonMatchingGroups(...arr_aproxPrefix,...arr_aproxPrefixOnlyPiece)
    export const aproxPrefixOnlyPieceStrRegex = embedGroupStrRegex(_aproxPrefixOnlyPieceStrRegex)
    export const getAproxOnlyPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
                           
        return embedNonCampturingGroupStrRegex(`${embedOptional(aproxPrefixOnlyPieceStrRegex)}\\s*${getInBetweenNumberPieceStringUnit(_strRegexUnit)}` as const)
    }

    export const getAproxNotPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
                           
        return embedNonCampturingGroupStrRegex(`${aproxPrefixStrRegex}\\s*${getInBetweenNumberStringUnit(_strRegexUnit)}` as const)
    }


    export const getAproxNotOnlyPieceStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
                           
        return unionRegexs(getAproxOnlyPieceStringUnit(_strRegexUnit),getAproxNotPieceStringUnit(_strRegexUnit)) 
    }

    const _strRegexAproxOnlyPiece = getUnionNonMatchingGroups(...arr_aproxType_onlyPiece)
    export const strRegexAproxOnlyPiece = embedGroupStrRegex(_strRegexAproxOnlyPiece)
    const _strRegexAproxNotOnlyPiece = getUnionNonMatchingGroups(...arr_aproxType_notOnlyPiece)
    export const strRegexAproxNotOnlyPiece = embedGroupStrRegex(_strRegexAproxNotOnlyPiece)

    export const aproxOnlyPieceStringUnit = getAproxOnlyPieceStringUnit(strRegexAproxOnlyPiece)
    export const aproxNotOnlyPieceStringUnit = getAproxNotOnlyPieceStringUnit(strRegexAproxNotOnlyPiece)

    export const arr_articleMultiplePiece = ["de"] as const 
    const _strRegexArticleMultiplePiece = getUnionNonMatchingGroups(...arr_articleMultiplePiece)
    export const strRegexArticleMultiplePiece = embedGroupStrRegex(_strRegexArticleMultiplePiece)
    const _strRegexMultiplePiece = getUnionNonMatchingGroups(...arr_multiplePiece)
    export const strRegexMultiplePiece = embedGroupStrRegex(_strRegexMultiplePiece)

    export const getPluralNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
       
        return  embedNonCampturingGroupStrRegex(`${moreThenOneStrRegex}\\s*${_strRegexUnit}s` as const )
    }


    export const getStrRegexMultiplePieceExp = <TStrRegexUnitPiece extends t_strRegex ,TStrRegexMultiplePiece extends t_strRegex = typeof strRegexMultiplePiece>(_strRegexUnitPiece:TStrRegexUnitPiece,_strRegexMultiplePiece :TStrRegexMultiplePiece = strRegexMultiplePiece as any )=>{                     
        return embedNonCampturingGroupStrRegex(`${_strRegexMultiplePiece}\\s*${embedOptional(strRegexArticleMultiplePiece)}\\s*${getPluralNumberedStringUnit(_strRegexUnitPiece)}` as const)
    }
    
    export const getStrRegexBatchQuantityExp = <TStrRegexUnit extends t_strRegex ,TStrRegexMultiplePiece extends t_strRegex = typeof strRegexMultiplePiece >(_strRegexUnit:TStrRegexUnit,_strRegexMultiplePiece: TStrRegexMultiplePiece=strRegexMultiplePiece as any)=>{                     
        return embedNonCampturingGroupStrRegex(`${embedOptionalNonCampturingGroupStrRegex(`${_strRegexMultiplePiece}\\s*${strRegexArticleMultiplePiece}`)}\\s*)?${strRegexNumberUnit}\\s*${_strRegexUnit}s` as const)
    }   

    const arr_stringUnitDf = ["unité","pièce"] as const 
    const _strRegexStringUnitDf = getUnionNonMatchingGroups(...arr_stringUnitDf)
    export const strRegexStringUnitDf = embedGroupStrRegex(_strRegexStringUnitDf)

    const arr_stringUnitLegume = ["tête","botte"] as const 
    const _strRegexStringUnitLegume = getUnionNonMatchingGroups(...arr_stringUnitLegume)
    export const strRegexStringUnitLegume = embedGroupStrRegex(_strRegexStringUnitLegume)

    export const strRegexStringUnit = embedNonCampturingGroupStrRegex(unionRegexs(strRegexStringUnitDf,strRegexStringUnitLegume))

    export const strRegexUnit = embedNonCampturingGroupStrRegex(unionRegexs(strRegexUnitQuantity,strRegexAproxType,strRegexStringUnit))
    export const getSingelNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
       
        return  embedNonCampturingGroupStrRegex(`1\\s*${_strRegexUnit}` as const)
    }

    export const getNumberedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
       
        return  unionRegexs(getPluralNumberedStringUnit(_strRegexUnit),getSingelNumberedStringUnit(_strRegexUnit))
    }

    export const getDividedStringUnit = <TStrRegexUnit extends t_strRegex >(_strRegexUnit:TStrRegexUnit)=>{
       
        return embedNonCampturingGroupStrRegex(`\\d\/\\d${embedOptional(ordinalSuffixRegex)}\\s*${_strRegexUnit}` as const)
    }

    export const dividedStrRegex = getDividedStringUnit(strRegexStringUnitDf)

    export const arr_timesChar = ["x","*"] as const
    export const strRegexTimesChar = getUnionNonMatchingGroups(...arr_timesChar)

    export const _getTimesStrRegex = <TStrRegex extends t_strRegex >(strRegex:TStrRegex)=>{
       
        return embedNonCampturingGroupStrRegex(`${strRegexTimesChar}\\s*${strRegex}` as const)
    }
    //is x 4 sachets

    export const getTimesStrRegex = <TStrRegex extends t_strRegex >(strRegex:TStrRegex)=>{
       
        return embedNonCampturingGroupStrRegex(`${moreThenOneStrRegex}\\s*${_getTimesStrRegex(strRegex)}` as const)
    }
    //PAS FAIS : (correctement) : 4 x 125 g


//PAS FAIS :panier/box



export const arr_size = ["très petit","petit","moyen","gros","extra gros","jumbo"] as const
export const strRegexStringSize = getUnionNonMatchingGroups(...arr_size)
export const arr_SizeUnit = ["calibre"] as const 
const strRegexStringSizeUnit =  getUnionNonMatchingGroups(...arr_SizeUnit)

export const strRegexSize = embedNonCampturingGroupStrRegex(`${strRegexStringSize}\\s*${strRegexStringSizeUnit}` as const)

export const arr_per = ["/"," ",""] as const 
const _strRegexPer = getUnionNonMatchingGroups(...arr_per)
export const strRegexPer = embedGroupStrRegex(_strRegexPer)
export const strRegexPricePerUnit = `${strRegexPrice}\\s*${strRegexPer}\\s*${strRegexUnit}`as const 
//"lot|sachet ((?:~)|(?:env))?(?:(\\d+\/\\d+)|(${strRegexBegNumberUnit}\/${strRegexBegNumberUnit}\\s*${strRegexUnitQuantity}))
//"lot|sachet|part (\((?:~)|(?:env))?(?:(\\d+\/\\d+)|(${strRegexBegNumberUnit}\/${strRegexBegNumberUnit}\\s*${strRegexUnitQuantity})\))

//A:/barquette/emballé/filet