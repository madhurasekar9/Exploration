// Define the API endpoint and API key
const endpoint = "https://api.example.com/galleries";
const apiKey = "AIzaSyBJOWpInhXmEfKj38L_q4uUzPjPLBRZX3U";

// Define the borough filter buttons
const manhattanBtn = document.getElementById("manhattan-btn");
const brooklynBtn = document.getElementById("brooklyn-btn");
const queensBtn = document.getElementById("queens-btn");

// Define the gallery list container and the loading spinner
const galleryList = document.getElementById("gallery-list");
const loader = document.getElementById("loader");

// Define the function to fetch the gallery data from the API
async function getGalleries() {
  // Show the loading spinner
  loader.style.display = "block";
  
  // Fetch the gallery data from the API
  const response = await fetch(`${endpoint}?key=${apiKey}`);

  // Parse the response JSON data
  const data = await response.json();

  // Return the gallery data array
  return data;
}

// Define the function to display the gallery data on the page
function displayGalleries(galleries) {
  // Clear the gallery list container
  galleryList.innerHTML = "";

  // Loop through the gallery data array
  galleries.forEach((gallery) => {
    // Create a gallery card element
    const galleryCard = document.createElement("div");
    galleryCard.classList.add("gallery-card");

    // Create a gallery name element and set its text content
    const galleryName = document.createElement("h2");
    galleryName.textContent = gallery.name;

    // Create a gallery address element and set its text content
    const galleryAddress = document.createElement("p");
    galleryAddress.textContent = gallery.address;

    // Create a gallery borough element and set its text content
    const galleryBorough = document.createElement("p");
    galleryBorough.textContent = gallery.borough;

    // Append the gallery name, address, and borough elements to the gallery card
    galleryCard.appendChild(galleryName);
    galleryCard.appendChild(galleryAddress);
    galleryCard.appendChild(galleryBorough);

    // Append the gallery card to the gallery list container
    galleryList.appendChild(galleryCard);
  });

  // Hide the loading spinner
  loader.style.display = "none";
}

// Add event listeners to the borough filter buttons
manhattanBtn.addEventListener("click", async () => {
  // Get the gallery data from the API
  const galleries = await getGalleries();

  // Filter the gallery data by borough
  const filteredGalleries = galleries.filter(
    (gallery) => gallery.borough === "Manhattan"
  );

  // Display the filtered gallery data on the page
  displayGalleries(filteredGalleries);
});

brooklynBtn.addEventListener("click", async () => {
  // Get the gallery data from the API
  const galleries = await getGalleries();

  // Filter the gallery data by borough
  const filteredGalleries = galleries.filter(
    (gallery) => gallery.borough === "Brooklyn"
  );

  // Display the filtered gallery data on the page
  displayGalleries(filteredGalleries);
});

queensBtn.addEventListener("click", async () => {
  // Get the gallery data from the API
  const galleries = await getGalleries();

  // Filter the gallery data by borough
  const filteredGalleries = galleries.filter(
    (gallery) => gallery.borough === "Queens"
  );

  // Display the filtered gallery data on the page
  displayGalleries(filteredGalleries);
});

// Initialize the page by displaying all the gallery data on the page
(async function () {
  // Get the gallery data from the API
  const galleries = await getGalleries();});

  // Display the gallery data