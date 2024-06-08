const tree = function (input) {
  switch (typeof input) {
    case 'string':
    case 'number':
    case 'boolean':
      console.log(input);
      break;
    case 'object':
      if (Array.isArray(input)) {
        input.forEach(element => tree(element));
      } else {
        for (let key in input) {
          if (input.hasOwnProperty(key)) {
            tree(input[key]);
          }
        }
      }
      break;
    default:
      console.log('Unsupported type');
  }
}
