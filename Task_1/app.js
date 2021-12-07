const oddColumn = document.querySelector('.odd');
const evenColumn = document.querySelector('.even');

function render(numbers) {
  oddColumn.innerHTML = '';
  evenColumn.innerHTML = '';

  numbers.forEach(function (number) {
    if (number % 2 === 0) {
      evenColumn.innerHTML = evenColumn.innerHTML + `<div>${number}</div>`;
    } else {
      oddColumn.innerHTML = oddColumn.innerHTML + `<div>${number}</div>`;
    }
  });
}

document.querySelector('button').addEventListener('click', function () {
  const numbers = [];

  while (numbers.length < 20) {
    const number = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  numbers.sort(function (a, b) {
    return a - b;
  });

  render(numbers);
});