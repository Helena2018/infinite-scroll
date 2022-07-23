// Unsplash API
const count = 10;
const apiKey = 'ctMG8haf-qRPxQBBq7TUoMjFlSsyVm8D_PWD0iPA718'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = response.json();
    console.log(data);
  } catch(error) {
    // Catch Error Here
  }
}

// On Load
getPhotos()
