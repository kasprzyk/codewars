/**
 * Created by piotr on 13.08.17.
 */
function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce((total,next)=> total+next,0)

}