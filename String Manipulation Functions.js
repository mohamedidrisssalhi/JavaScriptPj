function manipulateString(str) {
    const reversedString=str.split('').reverse().join('');
    const characterCount=str.length;
    const capitalizedWords=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    return{
        reversedString: reversedString,
        characterCount: characterCount,
        capitalizedWords: capitalizedWords,
    };
}
const result=manipulateString("hello world");
console.log(result);

