import { renderBook, saveBookToLocalStorage, loadBooksFromLocalStorage } from './books';
import { schema, handleValidationError, clearForm } from './form';

loadBooksFromLocalStorage();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const book = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
    priority: document.querySelector('input[name="priority"]:checked')?.value,
    category: document.querySelector('#category').value,
  };

  schema.validate(book)
    .then(function () {
      renderBook(book);
      saveBookToLocalStorage();
      clearForm();
    })
    .catch(handleValidationError);
});
