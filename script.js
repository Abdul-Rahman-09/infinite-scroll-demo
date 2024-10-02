// Globals
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let fetchedPhotos = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
const photosCount = 30;
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
  // Setting totalImages
  imagesLoaded = 0;
  totalImages = fetchedPhotos.length;
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

    // Event Listener, check when each is finished loading
    img.addEventListener("load", () => {
      loader.hidden = true;
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        loader.hidden = true;
      }
    });
    // Arranging elements
    linkElement.appendChild(img);
    imageContainer.appendChild(linkElement);
  });
};

// Check if scrolling is near bottom
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    ready
  ) {
    ready = false;
    loader.hidden = false;
    getPhotos();
  }
});

// On Load
getPhotos();
displayPhotos();
