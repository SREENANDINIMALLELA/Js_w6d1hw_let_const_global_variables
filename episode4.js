let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// here the let suspectThree scope is only inside the declareAllSuspects function so when in that function the suspectThree value is 'Colonel Mustard' outside of the function the suspectThree value is 'Mrs. Peacock'

// so the output is The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//Suspect three is Mrs. Peacock.
