// const searchBar = document.getElementById('search-bar');
// const cards = document.querySelectorAll('.card');

// searchBar.addEventListener('keyup', (e) => {
//   const searchText = e.target.value.toLowerCase();
//   cards.forEach(card => {
//     const cardText = card.textContent.toLowerCase();
//     if (cardText.includes(searchText)) {
//       card.style.display = 'block';
//       if (card.id !== 'card-1') {
//         card.style.marginTop = '30px';
//       }
//     } else {
//       card.style.display = 'none';
//     }
//   });
// });






  const searchInput = document.querySelector('#search-input');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const match = title.includes(query);
      card.style.display = match ? 'block' : 'none';
    });
  });



// const colors = ['#f44336', '#2196f3', '#4caf50', '#ffc107'];
// let i = 0;

// setInterval(() => {
//   document.body.style.backgroundColor = colors[i];
//   i = (i + 1) % colors.length;
// }, 3000);

