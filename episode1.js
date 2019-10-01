const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// output will be The murderer is Miss Scarlet.
// we are calling the declareMurderer function and in that returning the scenario object value where key is murderer
