const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// //  constant variable prevents us from resaaignig to the constant variables when the datatype is  string or integer but we can reassign/modify  the object values even when it is constant
// so  gets an error as assigning the constant variable
