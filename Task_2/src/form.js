import * as yup from 'yup';
import { renderBook, saveBookToLocalStorage } from './books';

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const priority = document.querySelector('input[name="priority"]:checked');
const category = document.querySelector('#category');

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
  title.value = '';
  author.value = '';
  priority.checked = false;
  category.value = '';
}

export function initForm() {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const book = {
      title: title.value,
      author: author.value,
      priority: priority?.value,
      category: category.value,
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