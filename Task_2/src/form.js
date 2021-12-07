import * as yup from 'yup';

const form = document.querySelector('form');

export const schema = yup.object().shape({
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

export function handleValidationError(err) {
  clearErrors();
  const errors = document.createElement('div');
  errors.classList = 'errors';
  errors.innerHTML = err.errors[0];
  form.appendChild(errors);
}

export function clearForm() {
  clearErrors();
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('input[name="priority"]:checked').checked = false;
  document.querySelector('#category').value = '';
}