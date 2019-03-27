/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/


var array1 = [1,2,3,4,5,6,7,8,9]

function twoSum(array,number) {

    var element = array[i];

    for(var i=0; i<array.length; i++} {
        if(array[i]<number) {
        element = element + i
        };
        else if(array[i]===number) {
        element = element;
        }
    }
    return element;
}

