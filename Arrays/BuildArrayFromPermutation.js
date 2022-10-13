/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let arr = new Array();
    for(var i = 0; i < nums.length; i++){
        arr[i] = nums[nums[i]];
    } 
    return arr;
};

// Thought proccess
// Look at examples of how the output is being formatted
// We know the first two elements of the array will be returned as 
// arry = [ nums[nums[0], nums[nums[1]] ];
// We break it down by knowing that we use a for loop to increment each index of the array
// Then we know to use that index to get the value of the array and use that value to get a new index to assign to our new array