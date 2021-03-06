import castSlice from './.internal/castSlice.js';
import hasUnicode from './.internal/hasUnicode.js';
import stringToArray from './.internal/stringToArray.js';
import toString from './toString.js';

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return string => {
    string = toString(string);

    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    const chr = strSymbols
      ? strSymbols[0]
      : string[0];

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

export default createCaseFirst;
