
function clickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function limitarNome(event) {
    const maxCaracteres = 50;
    const inputNome = event.target;

    if (inputNome.value.length > maxCaracteres) {
      inputNome.value = inputNome.value.slice(0, maxCaracteres);
    }
}

function limitarAssunto(event) {
    const maxCaracteres = 50;
    const inputAssunto = event.target;

    if (inputAssunto.value.length > maxCaracteres) {
      inputAssunto.value = inputAssunto.value.slice(0, maxCaracteres);
    }
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function verificarCamposPreenchidos() {
    const campos = document.querySelectorAll('[data-name], [data-email], [data-subject], [data-message]');
    let todosPreenchidos = true;

    campos.forEach((campo) => {
      if (!campo.value.trim()) {
        todosPreenchidos = false;
      }
    });

    const botaoEnviar = document.querySelector('[data-submit]');
    botaoEnviar.disabled = !todosPreenchidos;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector('[data-name]').value;
    const email = document.querySelector('[data-email]').value;
    const subject = document.querySelector('[data-subject]').value;
    const message = document.querySelector('[data-message]').value;

    if (!email) {
      alert('Por favor, preencha o campo de e-mail.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
    

    if (name && subject && message) {
      document.querySelector('[data-contact]').style.display = 'none';
      document.querySelector('[data-thank-message]').style.display = 'block';
      sendFormData(document.querySelector('[data-form]'));

    } else {

      alert('Por favor, preencha todos os campos do formulário.');
    }
  }

  function sendFormData(form) {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          form.style.display = 'none';
          document.querySelector('[data-thank-message]').style.display = 'block';
        } else {
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        }
      }
    };
    xhr.send(formData);
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('[data-name]').addEventListener('input', verificarCamposPreenchidos);
    document.querySelector('[data-email]').addEventListener('input', verificarCamposPreenchidos);
    document.querySelector('[data-subject]').addEventListener('input', verificarCamposPreenchidos);
    document.querySelector('[data-message]').addEventListener('input', verificarCamposPreenchidos);


    const submitButton = document.querySelector('[data-submit]');
    submitButton.addEventListener('click', handleSubmit);

    verificarCamposPreenchidos();
    document.querySelector('[data-name]').addEventListener('input', limitarNome);
    document.querySelector('[data-subject]').addEventListener('input', limitarAssunto);
  });

 
