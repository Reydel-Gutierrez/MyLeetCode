​//First solution I tried

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for (var i = 0; i < nums.length; i++){
        for (var j = i+1; j < nums.length; j++){
            if (nums[i] == nums[j]){
                nums.splice(i, 1);
                removeDuplicates(nums);
            }
        }
    }
    
    var k = nums.length;
    return k;
};
