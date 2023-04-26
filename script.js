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




// function myFunction() {
//   var input, filter, cards, cardContainer, h4, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   cardContainer = document.getElementsByClassName("row")[0];
//   cards = cardContainer.getElementsByClassName("searchable-card");
//   for (i = 0; i < cards.length; i++) {
//     h4 = cards[i].getElementsByClassName("card-content")[0].getElementsByTagName("h4")[0];
//     txtValue = h4.textContent || h4.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       cards[i].classList.remove("hide");
//     } else {
//       cards[i].classList.add("hide");
//     }
//   }
// }



// const colors = ['#f44336', '#2196f3', '#4caf50', '#ffc107'];
// let i = 0;

// setInterval(() => {
//   document.body.style.backgroundColor = colors[i];
//   i = (i + 1) % colors.length;
// }, 3000);

