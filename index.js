const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 
  return tutorials.map((title) => {
    const word = title.split(" ");
    const capital = word.map((initial) => initial.charAt(0).toUpperCase() + initial.slice(1)
    );
    const result = capital.join(" ");
    return result;
  });
};
