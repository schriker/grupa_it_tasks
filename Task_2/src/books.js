const books = [];
const tableBody = document.querySelector('tbody');

export function renderBook(book) {
  books.push(book);
  const tableRow = document.createElement('tr');
  for (let key in book) {
    const rowCell = document.createElement('td');
    rowCell.innerHTML = book[key];
    tableRow.appendChild(rowCell);
  }
  tableBody.appendChild(tableRow);
}

export function loadBooksFromLocalStorage() {
  const localBooks = localStorage.getItem('books');
  if (localBooks) {
    const parsedBooks = JSON.parse(localBooks);
    for (let key in parsedBooks) {
      renderBook(parsedBooks[key]);
    }
  }
}

export function saveBookToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}
