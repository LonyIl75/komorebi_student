export const queryParamOperatorValue = "="
export function concatNameAndValueQueryParam(key: string, value: string): string {
  return key + queryParamOperatorValue + value
}
export const queryParamOperator = "?"
export function concatQueryParams(params: string[]): string {
  return queryParamOperator + params.join("&")
}
