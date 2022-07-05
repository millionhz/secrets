const form = document.querySelector('form');
const email = form.elements[0];
const password = form.elements[1];

const alert = document.querySelector('.alert');

function submitForm() {
  const data = new URLSearchParams();
  data.set(email.name, email.value);
  data.set(password.name, password.value);

  fetch(form.action, {
    method: form.method,
    body: data,
  }).then((res) => {
    if (res.url === window.location.href) {
      alert.style.display = null;
    } else {
      window.location.href = res.url;
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});
