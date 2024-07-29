// Use geolocation api for user to get location
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
} else {
    console.error("Geolocation is not supported by this browser.");
}

function successCallback(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    reverseGeoCode(latitude,longitude);
}

function errorCallback(error){
    console.error("Error occurred while retrieving location: ", error);
}

