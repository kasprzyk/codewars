/**
 * Created by piotr on 13.08.17.
 */
function calculator(a,b,sign){
    switch(sign){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return 'unknown value';
    }
}