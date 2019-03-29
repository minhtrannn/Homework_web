'use strict'

function generate(testLengthArray,target,output){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  if(testLengthArray[0] == target)
  {
    return 0;
  }
  if(testLengthArray[testLengthArray.length-1] == target)
  {
    return testLengthArray.length-1;
  }
  for(var i = 0;i< testLengthArray.length;i++)
  {
    if(testLengthArray[i]==target && i == output)
    {
      return i;
    }
  }
  return -1;
}

module.exports = generate
