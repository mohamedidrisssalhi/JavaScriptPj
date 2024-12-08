function performMathFunctions(n) {
    function factorial(num) {
        if(num===0) return 1;
        return num*factorial(num-1);
    }
    function isPrime(num){
        if(num<=1) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return false;
        }
        return true;
    }
    function fibonacci(num){
        if(num<=0) return[];
        if(num===1) return[0];
        if(num===2) return[0,1];
        let seq=[0,1];
        for(let i=2; i<num; i++){
            seq.push(seq[i-1]+seq[i-2]);
        }
        return seq;
    }
    return{
        factorial: factorial(n),
        isPrime: isPrime(n),
        fibonacci: fibonacci(n),
    };
}
const result=performMathFunctions(5);
console.log(result);