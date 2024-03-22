document.getElementById('getLocation').addEventListener('click', function(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var locationURL = 'https://www.google.com/maps?q=' + latitude + ',' + longitude;
        // Simulate sending location data to the server
        sendLocationData(latitude, longitude);
        // Redirect user to the location URL
        window.location.href = locationURL;
      }, function(error) {
        alert('Error getting location: ' + error.message);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  
  function sendLocationData(latitude, longitude) {
    // You can implement code here to send the location data to your server
    // For demonstration, let's just log the coordinates to the console
    console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
  }
  