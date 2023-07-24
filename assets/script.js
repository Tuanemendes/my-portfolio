
function clickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  document.querySelector('[data-submit]').addEventListener('click', function() {
    // Obter os valores dos campos do formulário usando data attributes
    var name = document.querySelector('[data-name]').value;
    var email = document.querySelector('[data-email]').value;
    var subject = document.querySelector('[data-subject]').value;
    var message = document.querySelector('[data-message]').value;

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
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('[data-form]');
    const submitButton = document.querySelector('[data-submit]');
    const thankMessage = document.querySelector('[data-thank-message]');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      sendFormData(contactForm);
    });

    function sendFormData(form) {
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', form.action, true);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            form.style.display = 'none';
            thankMessage.style.display = 'block';
          } else {
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
          }
        }
      };
      xhr.send(formData);
    }
  });

