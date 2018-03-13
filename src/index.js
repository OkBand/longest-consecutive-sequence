module.exports = function longestConsecutiveLength(array) {
  var length = array.length;
  var longestSequence = 0;
  var i = 0;
  var j =0;
  while(i < length) {
    var sequence = [];
    sequence.push(array[i]);
    while(array[j+1] === array[j] + 1){
      sequence.push(array[j+1])
      j++;
    };
    i = j + 1;
    j++;
    if (sequence.length > longestSequence) {
      longestSequence = sequence.length;
    };
  };
  return longestSequence;
}
