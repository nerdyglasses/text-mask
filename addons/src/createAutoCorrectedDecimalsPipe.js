const dollarSign = '$'
const emptyString = ''
const comma = ','
const period = '.'
const minus = '-'
const minusRegExp = /-/
const nonDigitsRegExp = /\D+/g
const number = 'number'
const digitRegExp = /\d/
const caretTrap = '[]'
const numberRegExp = /[^0-9.]/g

export default function createAutoCorrectedDatePipe({
  prefix = dollarSign,
  suffix = emptyString,
  includeThousandsSeparator = true,
  thousandsSeparatorSymbol = comma,
  allowDecimal = false,
  decimalSymbol = period,
  decimalLimit = 2,
  requireDecimal = false,
  allowNegative = false,
  startWithDecimals = true,
} = {}) {
  const prefixLength = prefix.length

  return function(conformedValue) {
    console.log('-----------------------------')
    console.log('conformedValue', conformedValue)
    if ((conformedValue.length - prefixLength) <= 1) { return { value: conformedValue } }

    const divider = Math.pow(10, decimalLimit)
    const floatValue = parseFloat(conformedValue.replace(numberRegExp, emptyString)) / divider
    const value = floatValue.toString()
    console.log('floatValue', floatValue)
    console.log('divider', divider)
    console.log('value', value)
    return { value }
  }
}
