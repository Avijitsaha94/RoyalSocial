document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
