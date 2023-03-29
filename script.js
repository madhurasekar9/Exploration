

const apiKey = "AIzaSyBJOWpInhXmEfKj38L_q4uUzPjPLBRZX3U";
const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=galleries+in+nyc`;

const galleryList = document.getElementById("gallery-list");
const boroughFilter = document.getElementById("borough-filter");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const galleries = data.results.filter(result => {
      return (
        result.formatted_address.includes("Manhattan") ||
        result.formatted_address.includes("Queens") ||
        result.formatted_address.includes("Brooklyn")
      );
    });

    galleries.forEach(gallery => {
      const galleryItem = document.createElement("li");
      galleryItem.innerHTML = `
        <h3>${gallery.name}</h3>
        <p>${gallery.formatted_address}</p>
        <p>Rating: ${gallery.rating}/5</p>
        <p>${gallery.types.join(", ")}</p>
      `;
      galleryList.appendChild(galleryItem);
    });

    boroughFilter.addEventListener("change", event => {
      const selectedBorough = event.target.value;
      galleryList.innerHTML = "";

      galleries.forEach(gallery => {
        if (gallery.formatted_address.includes(selectedBorough)) {
          const galleryItem = document.createElement("li");
          galleryItem.innerHTML = `
            <h3>${gallery.name}</h3>
            <p>${gallery.formatted_address}</p>
            <p>Rating: ${gallery.rating}/5</p>
            <p>${gallery.types.join(", ")}</p>
          `;
          galleryList.appendChild(galleryItem);
        }
      });
    });
  })
  .catch(error => {
    console.log(error);
  });
