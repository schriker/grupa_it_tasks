const oddColumn = document.querySelector('.odd');
const evenColumn = document.querySelector('.even');

function render(numbers, container) {
  container.innerHTML = '';

  numbers.sort(function (a, b) {
    return a - b;
  }).forEach(function (number) {
    container.innerHTML = container.innerHTML + `<div>${number}</div>`;
  });
}

document.querySelector('button').addEventListener('click', function () {
  const odd = [];
  const even = [];

  while (odd.length + even.length < 20) {
    const number = Math.floor(Math.random() * 100) + 1;

    if (!odd.includes(number) && !even.includes(number)) {
      number % 2 === 0 ? even.push(number) : odd.push(number);
    }
  }

  render(odd, oddColumn);
  render(even, evenColumn);
});