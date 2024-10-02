// Unsplash API
const photosCount = 15;
const apiKey = "WDz1zYyXYX_D2o4HehLmDb9CfB_J078vwy-_RVk069k";
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${photosCount}`;

const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// On Load
getPhotos();
