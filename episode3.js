let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// we used let here
// firstly let = professor plum and in the declaremurderer function we have a other block variable murderer which is in the scope of that function only so it will return mrs peackok only if we call that function
// outside of the function it doesn't know about the murderer initialised as mrs.peacock;
// so for firstconsole it will  give output as First Verdict:  The murderer is Mrs. Peacock.
// for second console Second Verdict:  The murderer is Professor Plum.
