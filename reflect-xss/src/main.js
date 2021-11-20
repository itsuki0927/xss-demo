const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
  location.href = `/search?q=${search.value}`;
});
