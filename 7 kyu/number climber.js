/**
 * Created by piotr on 13.08.17.
 */
function climb (n) {
    var output = [];
    while (n >= 1) {
        output.unshift(n);
        n = Math.floor(n/2);
    }
    return output;
}