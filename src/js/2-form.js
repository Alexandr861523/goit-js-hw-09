let formData = {
  email: '',
  message: '',
};

function forms() {
  formData.email = document.querySelector('.email').value;
  formData.message = document.querySelector('.message').value;

  sessionStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

window.addEventListener('load', () => {
  const storedData = sessionStorage.getItem('feedback-form-data');
  if (storedData) {
    formData = JSON.parse(storedData);

    document.querySelector('.email').value = formData.email;
    document.querySelector('.message').value = formData.message;
  }
});

document.querySelector('.feedback-form').addEventListener('input', forms);

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Заповни поля');
    return;
  }

  console.log(formData);

  sessionStorage.removeItem('feedback-form-data');
  formData = { email: '', message: '' };
  document.querySelector('.email').value = '';
  document.querySelector('.message').value = '';
});