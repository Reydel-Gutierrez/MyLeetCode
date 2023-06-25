/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    var array = Array.from(String(n), Number);
    var totalHolder = 0;
    
    for (var i = 0; i < array.length; i++){   
        totalHolder += array[i]*array[i];      
    }
    
    if (totalHolder !== 1 && totalHolder !== 4) {
        return isHappy(totalHolder);  
    } else {
        return totalHolder === 1;
    }
    
};