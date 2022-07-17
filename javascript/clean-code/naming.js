function pringGussStatistics(candidate, count) {
  let number;
  let verb;
  let pluralModifier;

  if (count === 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count === 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }

  const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`;
  return guessMessage;
}

function GuessStatisticsMessage() {
  let number;
  let verb;
  let pluralModifier;

  function createPluralDependentMessageParts(count) {
    if (count === 0) return thereAreNoLetters();
    if (count === 1) return thereIsOneLetter();
    thereAreManyLetters(count);
  }

  function thereAreManyLetters(count) {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }

  function thereIsOneLetter() {
    number = "1";
    verb = "is";
    pluralModifier = "";
  }

  function thereAreNoLetters() {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  }

  this.Make = function (candidate, count) {
    createPluralDependentMessageParts(count);
    const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`;
    return guessMessage;
  };
}
