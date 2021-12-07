import * as yup from 'yup';
import { renderBook, saveBookToLocalStorage } from './books';

const form = document.querySelector('form');

const schema = yup.object().shape({
  title: yup.string().required('Tytuł jest wymagany.'),
  author: yup.string().required('Autor jest wymagany.').min(3, 'Autor min. 3 znaki.'),
  priority: yup.number('Priorytet jest wymagany.').required('Priorytet jest wymagany.').min(1).max(5),
  category: yup.string().required('Kategoria jest wymagana.'),
});

function clearErrors() {
  const errorsContainer = document.querySelector('.errors');
  if (errorsContainer) {
    form.removeChild(errorsContainer);
  }
}

function handleValidationError(err) {
  clearErrors();
  const errors = document.createElement('div');
  errors.classList = 'errors';
  errors.innerHTML = err.errors[0];
  form.appendChild(errors);
}

function clearForm() {
  clearErrors();
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('input[name="priority"]:checked').checked = false;
  document.querySelector('#category').value = '';
}

export function initForm() {
  form.addEventListener('submit', function (e) {
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
}