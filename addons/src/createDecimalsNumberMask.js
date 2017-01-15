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

export default function createDecimalsNumberMask({
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

  function decimalsNumberMask(rawValue) {
    const rawValueLength = rawValue.length
    // console.log('rawValue', rawValue)

    if (
      rawValue === emptyString ||
      (rawValue[0] === prefix[0] && rawValueLength === 1)
    ) {
      // console.log('rawValue empty')
      return prefix.split(emptyString).concat([digitRegExp]).concat(suffix.split(emptyString))
    }

    const indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol)
    const hasDecimal = indexOfLastDecimal !== -1
    const isNegative = (rawValue[0] === minus) && allowNegative

    let integer
    let fraction
    let mask

    if (hasDecimal && (allowDecimal || requireDecimal)) {
      integer = rawValue.slice(0, indexOfLastDecimal)

      fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength)
      fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString))
    } else {
      integer = rawValue
    }

    integer = integer.replace(nonDigitsRegExp, emptyString)

    integer = (includeThousandsSeparator) ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer

    mask = convertToMask(integer)
    // console.log('mask 1', mask)

    // if ((hasDecimal && allowDecimal) || requireDecimal === true) {
    //   if (rawValue[indexOfLastDecimal - 1] !== decimalSymbol) {
    //     mask.push(decimalSymbol)
    //     console.log('mask 2', mask)
    //   }

    //   // mask.push(decimalSymbol, caretTrap)
    //   // console.log('mask 3', mask)

    //   if (fraction) {
    //     if (typeof decimalLimit === number) {
    //       console.log('fractionbefore', fraction)
    //       fraction = fraction.slice(0, decimalLimit)
    //       console.log('fractionafter', fraction)
    //     }

    //     mask = mask.concat(fraction)
    //     console.log('mask 4', mask)
    //   }

    //   if (requireDecimal === true && rawValue[indexOfLastDecimal - 1] === decimalSymbol) {
    //     mask.push(digitRegExp)
    //     console.log('mask 5', mask)
    //   }
    // }

    if (prefixLength > 0) {
      mask = prefix.split(emptyString).concat(mask)
      // console.log('mask 6', mask)
    }

    if (isNegative) {
      // If user is entering a negative number, add a mask placeholder spot to attract the caret to it.
      if (mask.length === prefixLength) {
        mask.push(digitRegExp)
        // console.log('mask 7', mask)
      }

      mask = [minusRegExp].concat(mask)
      // console.log('mask 8', mask)
    }

    if (suffix.length > 0) {
      mask = mask.concat(suffix.split(emptyString))
      // console.log('mask 9', mask)
    }

    // console.log('integer', integer)
    // console.log('fraction', fraction)
    // mask.push(caretTrap)
    mask = mask.concat(decimalSymbol)
    for (let i = 0; i < decimalLimit; i++) {
      mask = mask.concat(digitRegExp)
    }
    // console.log('final mask', mask)
    // console.log('---------------------------------------------')
    return mask
  }

  decimalsNumberMask.instanceOf = 'createDecimalsNumberMask'
  return decimalsNumberMask
}

function convertToMask(strNumber) {
  return strNumber
    .split(emptyString)
    .map((char) => digitRegExp.test(char) ? digitRegExp : char)
}

// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n, thousandsSeparatorSymbol) {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol)
}
