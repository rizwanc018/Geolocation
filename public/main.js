document.getElementById('getLocationButton').addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      try {
        const response = await fetch(`/getAddress?lat=${latitude}&lng=${longitude}`);
        const data = await response.json();
        const address = data.address;
        console.log('Current address:', address);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
});