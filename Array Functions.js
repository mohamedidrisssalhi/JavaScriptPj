function analyzeArray(arr, condition) {
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    const sum=arr.reduce((total, num)=> total+num, 0);
    const filteredArray=arr.filter(condition);
    return{
        max: max,
        min: min,
        sum: sum,
        filteredArray: filteredArray,
    };
}
const result=analyzeArray([1,2,3,4,5], num=>num%2 !==0);
console.log(result);