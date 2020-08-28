function initMap() {
    let options = {
        zoom:8,
        center:{lat:48.866667, lng:2.333333}
    }
    let pos = {
        lat:48.866667, 
        lng:2.333333
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    // var jsonData = map.data.loadGeoJson('../restaurant.json');
    var myInit = { method: 'GET',
                   headers: {
                       'Content-Type':'application/json'
                   },
                   mode: 'cors',
                   cache: 'default' };

    let myRequest = new Request("./restaurant.json", myInit);
     fetch(myRequest)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            data.map(restaurant => { 
                const myLatLng = {lat: restaurant.lat, lng:restaurant.long};

                  var txt = "<table border='1'>" 
                  var rating = document.getElementById('rating');
                      
                      for (let i = 0; i < restaurant.ratings[i].length; i++) {
                        var rate = restaurant.ratings[i];
                        txt += "<tr><td>" + restaurant.ratings[0]["stars"] + "</td></tr>";
                        rating.innerHTML = txt;
                        console.log(rate)
                      }
                //   comment.textContent = rate.                 
                    new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: restaurant.restaurantName
                  });
            }
        )});
}