document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const valido = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim());
  if (!valido) {
    email.classList.add('is-invalid');
    return;
  } else { email.classList.remove('is-invalid'); }

  const data = {
    sobre: document.getElementById('sobre').value,
    cargo: document.getElementById('cargo').value,
    equipe: document.getElementById('equipe').value,
    formacao: document.getElementById('formacao').value,
    email: email.value,
    localidade: document.getElementById('localidade').value
  };
  localStorage.setItem('swift_perfil', JSON.stringify(data));

  const toastEl = document.createElement('div');
  toastEl.className = 'toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3';
  toastEl.innerHTML = `<div class="d-flex"><div class="toast-body">Perfil atualizado!</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
  document.body.appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl, { delay: 2000 });
  toast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('swift_perfil');
  if (saved) {
    const d = JSON.parse(saved);
    ['sobre','cargo','equipe','formacao','email','localidade'].forEach(id => {
      if (d[id]) document.getElementById(id).value = d[id];
    });
  }
});