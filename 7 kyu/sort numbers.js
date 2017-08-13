/**
 * Created by piotr on 13.08.17.
 */
function solution(nums){
    return nums === null ? [] : nums.sort(function(a,b){return a - b});
}