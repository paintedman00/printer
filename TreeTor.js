const tree = function (input) {
  if (typeof input === 'string') {
    console.log(input);
  } else if (typeof input === 'number') {
    console.log(input);
  } else if (typeof input === 'boolean') {
    console.log(input);
  } else if (Array.isArray(input)) {
    input.forEach((element) => {
      tree(element);
    });
  } else if (typeof input === 'object') {
    for (let key in input) {
      tree(input[key]);
    }
  }
}

