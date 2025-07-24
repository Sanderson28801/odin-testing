export function caesarCipher(str, shift) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    boundStr = "zaZA";
    if (
      (str.charCodeAt(i) <= boundStr.charCodeAt(0) &&
        str.charCodeAt(i) >= boundStr.charCodeAt(1)) ||
      (str.charCodeAt(i) <= boundStr.charCodeAt(2) &&
        str.charCodeAt(i) >= boundStr.charCodeAt(3))
    ) {
      let code = str.charCodeAt(i) + shift;
      //If a lowercase letter and needs to be rotated back to beginning
      if (str.charCodeAt(i) + shift > boundStr.charCodeAt(0)) {
        code = str.charCodeAt(i) + shift - 26;
      }
      //If uppercase letter and needs to be rotated back to the beginning
      else if (
        str.charCodeAt(i) + shift > boundStr.charCodeAt(2) &&
        str.charCodeAt(i) <= boundStr.charCodeAt(2) &&
        str.charCodeAt(i) >= boundStr.charCodeAt(3)
      ) {
        code = str.charCodeAt(i) + shift - 26;
      }
      newStr += String.fromCharCode(code);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
