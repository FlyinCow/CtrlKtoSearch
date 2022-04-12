document.addEventListener('keydown', (e) => {
  if (e.key === 'k' && e.ctrlKey) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('top-nav-search-q').focus();
  }
});
