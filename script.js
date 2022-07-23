const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'ctMG8haf-qRPxQBBq7TUoMjFlSsyVm8D_PWD0iPA718'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.link.html)
    item.setAttribute('target', '_blank')
  })
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = response.json();
    displayPhotos();
  } catch(error) {
    // Catch Error Here
  }
}

// On Load
getPhotos()
