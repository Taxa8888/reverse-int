module.exports = function reverse (n) {
    if ( n >= 0) {
        return parseFloat(n.toString().split('').reverse().join(''));
    } else {
        return parseFloat(Math.abs(n).toString().split('').reverse().join(''))
    }
  
}
