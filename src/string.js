
function validationToUppercase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(validationToUppercase('hello'))

function validationLength( str, limit) {
    str = str.trim();
    if( str.length <= limit) return str;
    str = str.slice( 0, limit);
    let lastSpace = str.lastIndexOf(" ");
    if( lastSpace > 0) {
        str = str.slice(0, lastSpace);
    }
    return str + "...";
}

console.log(validationLength("Это короткая строка", 18)); // Это короткая...
console.log(validationLength("Это очень длинная строка, которая должна быть укорочена.", 26)); // Это очень длинная строка,...
console.log(validationLength("Еще одна длинная строка без пробелов!!!", 15)); // Еще одна...
console.log(validationLength("Строка с несколькими предложениями. Первое предложение. Второе предложение!", 30)); // Строка с несколькими...
console.log(validationLength("Без пробеловсовсем", 10)); // Без...


function isOneSubstringOfOther(str1, str2) {
    return str2.includes(str1) ? true : !!str1.includes(str2)
}

console.log(isOneSubstringOfOther("hello", "world")); // false
console.log(isOneSubstringOfOther("hello", "helloworld")); // true
console.log(isOneSubstringOfOther("world", "helloworld")); // true
console.log(isOneSubstringOfOther("ello", "helloworld")); // true
console.log(isOneSubstringOfOther("abc", "def")); // false
console.log(isOneSubstringOfOther("", "abc")); // true (пустая строка является подстрокой любой строки)
console.log(isOneSubstringOfOther("abc", "")); // true (пустая строка является подстрокой любой строки)