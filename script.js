const searchBar = document.getElementById('search-bar');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase();
  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    if (cardText.includes(searchText)) {
      card.style.display = 'block';
      if (card.id !== 'card-1') {
        card.style.marginTop = '30px';
      }
    } else {
      card.style.display = 'none';
    }
  });
});




const colors = ['#f44336', '#2196f3', '#4caf50', '#ffc107'];
let i = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}, 3000);

