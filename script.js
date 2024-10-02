// Globals
const imageContainer = document.getElementById("image-container");
let fetchedPhotos = [];
const loader = document.getElementById("loader");

// Unsplash API
const photosCount = 15;
const apiKey = "WDz1zYyXYX_D2o4HehLmDb9CfB_J078vwy-_RVk069k";
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${photosCount}`;

const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    fetchedPhotos = await response.json();
    // fetchedPhotos = [...fetchedPhotos, ...data];
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
};

// Displaying Photos with links to unsplash using forEach
const displayPhotos = () => {
  fetchedPhotos.forEach((photo) => {
    // Create <a> element
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", photo.links.html);
    linkElement.setAttribute("target", "_blank");
    // Create <img> element
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // Arranging elements
    linkElement.appendChild(img);
    imageContainer.appendChild(linkElement);
  });
};

// On Load
getPhotos();
displayPhotos();
