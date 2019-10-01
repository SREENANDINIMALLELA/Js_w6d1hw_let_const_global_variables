let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  //murderer = 'Mr. Green'
  const plotTwist = function() {
    murderer = 'Mrs. White';
    //  murderer = 'Mrs. White'
  }

  plotTwist();
  //  murderer = 'Mrs. White'
}
//  murderer = 'Mrs. White'
const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// here inside the changemurderer function murderer variable is of type gobal and firstly it is equal to mr green after going inside the poltwist murder = 'Mrs. White' and  by calling the plotTwist it will return the plotTwist function and murderer as 'Mrs. White'

// so the output is `The murderer is Mrs. White.`
