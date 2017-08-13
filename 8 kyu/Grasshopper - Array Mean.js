/**
 * Created by piotr on 13.08.17.
 */
var findAverage = function (nums) {
    // Code here
    return nums.reduce((total, next) => total + next,0)/nums.length

}