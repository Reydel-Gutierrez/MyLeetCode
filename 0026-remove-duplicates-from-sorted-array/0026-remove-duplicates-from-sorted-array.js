/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var counter = 0;

    for (var i = 0; i < nums.length; i++){
        
        if(nums[i] == nums[i+1]){
            continue;
        }

        nums[counter] = nums[i];
        counter++;
    }     

    
    return counter;
};