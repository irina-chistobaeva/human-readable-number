module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let strNum = 'zero';
    let numArr = Array.from(number.toString());
    if (numArr.length == 1 && number > 0) {
        strNum = ones[number];
    }
    if (numArr.length == 2) {
        if (numArr[0] == 1) {
            strNum = teens[number - 10];
        }
        else {
            strNum = tens[numArr[0]] + ' ' + ones[numArr[1]];
        }

    }
    if (numArr.length == 3) {
        if (numArr[1] == 0) {
            strNum = ones[numArr[0]] + ' hundred ' + ones[numArr[2]];
        }
        else if (numArr[1] == 1) {
            strNum = ones[numArr[0]] + ' hundred ' + teens[numArr[2]];
        }
        else {
            strNum = ones[numArr[0]] + ' hundred ' + tens[numArr[1]] + ' ' + ones[numArr[2]];
        }
    }

    return strNum.trim();
}