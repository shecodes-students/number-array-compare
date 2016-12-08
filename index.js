function arrayCompare(array1, array2) {
    if (array2.length != array1.length) {    
        return false;
    } 

    for (var i = 0; i < array2.length; i++) {
        if (array2[i] != array1[i]) {
            return false;
        }
    } 
    return true;
}

function tolerantArrayCompare(array1,array2,tolerance){
    if (array2.length != array1.length) {    
        return false;
    } 

    for (var i = 0; i < array2.length; i++) {
        var difference = array1[i] - array2[i];
        if (difference < 0) {
            difference = difference * -1;
        }
        if (difference > tolerance) {
            return false;
        }
    }
    return true;        
}

module.exports = {
    arrayCompare: arrayCompare,
    tolerantArrayCompare: tolerantArrayCompare
};
