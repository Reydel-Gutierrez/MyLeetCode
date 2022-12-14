/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length == 0){
        return 0;
    }
    
    var left = 0;
    var right = s.length - 1;
    
    while (left < right) {
        
        if (s.charAt(left) == s.charAt(right)) {
            left += 1;
            right -= 1;
        } else 
            return 2;
        
    }
    
    return 1;
};