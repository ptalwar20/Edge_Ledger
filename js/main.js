var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 43.6777, lng: 79.6248},
          zoom: 8
        });
      }