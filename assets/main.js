document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--x', `${e.clientX-r.left}px`);
    btn.style.setProperty('--y', `${e.clientY-r.top}px`);
  });
});


document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
      const icon = faq.querySelector('button i');
      if (icon) icon.textContent = '+';
    });
    if (!wasActive) {
      item.classList.add('active');
      button.querySelector('i').textContent = '−';
    }
  });
});


// Final cleanup: demo form feedback and accessibility.
document.querySelectorAll('.lead-form').forEach(form => {
  form.addEventListener('submit', () => {
    const success = form.querySelector('.form-success');
    if (success) setTimeout(() => success.focus?.(), 0);
  });
});
