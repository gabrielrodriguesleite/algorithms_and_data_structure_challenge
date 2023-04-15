const filter = (arr, type) => {
  switch (type) {
    case 'letters':
      return arr.filter((i) => i.length == 1 && /[a-zA-Z]/.test(i))

    case 'numbers':
      return arr.filter((i) => typeof i == 'number')

    case 'highest':
      return arr.filter((i) => typeof i == 'number').reduce((p, c) => p < c ? c : p)

    default:
      return 'Use "letters", "numbers" ou "highest" in the type argument.'
  }
};

const calc = {
  addition: (arr) => arr.reduce((p, c) => c + p, 0),
  subtraction: (arr) => arr.reduce((p, c) => c - p, 0),
  multiplication: (arr) => arr.reduce((p, c) => c * p),
  division: (a, b) => {
    if (b == 0) throw new Error('0 division error.')
    return a / b
  }
}

const newID = () => 'XXXX-AAAA-BBBB-CCCC'
  .split('')
  .map((i) => i != '-' ? Math.random().toString(36)[3] : i)
  .join('')


module.exports = { filter, calc, newID }