let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      // murderer ='Miss Scarlet'
      murderer = 'Miss Scarlet';
    }
    //Murderers Colonel Mustard
    unexpectedOutcome();
    //Murderer Miss Scarlet
  }
  //Murderer Mr. Green
  plotTwist();
  //Murderer Mr. Green
}
//murderer = Professor Plum
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
//Murderer Mr. Green
const verdict = declareMurderer();
//The murderer is Mr. Green.
console.log(verdict);
