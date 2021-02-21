require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    //"esri/layers/GraphicsLayer"	
  ], function(Map, MapView, Graphic) {

        // Create a basemap for the map view
        var map = new Map({
            basemap: "streets-vector"
        });

        // Create a map view for the HTML centered at Rexburg
        // (Long = -111.7896876, Lat = 43.8260227) using the basemap
        // previously created.
        var view = new MapView({
            container: "viewDiv",  // Where in the html to put this 
            map: map,              // The basemap we created above
            center: [-111.7896876, 43.8260227], // Rexburg longitude, latitude
            zoom: 3                // zoom in level
        });

        //Popup for Asian Marketplace
        /*const popupAsian = {
          "title": "Asian Market",
          "content":  "<b>Name:</b> {NAME}<br> <b>State:</b> {ST_NAME}<br><b>City:</b> {CITY_JUR}<br>Street:</b> {X_STREET}<br><b>"
        }*/

       var point = {
          type: "point", // autocasts as new Point()
          latitude: 40.749730,
          longitude: -111.878700
        };

        var point2 = {
          type: "point",
          latitude: 43.590360,
          longitude: -116.315050
        };

        var point3 = {
          type: "point",
          latitude: 47.656870,
          longitude: -117.380130
        }

        // Create a symbol for drawing the point
        var markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [86, 255, 51],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [7, 7, 7],
            width: 2
          }
        };

         // Create a symbol for drawing the point
        var markerSymbol2 = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [24, 56, 223],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [8, 8, 8],
            width: 1
          }
        };

        // Create a symbol for drawing the point
        var markerSymbol3 = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [247, 121, 39],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [8, 8, 8],
            width: 1
          }
        };

        // Create a graphic and add the geometry and symbol to it
        var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol
        });

        var pointGraphic2 = new Graphic({
          geometry: point2,
          symbol: markerSymbol2
        });

        var pointGraphic3 = new Graphic({
          geometry: point3,
          symbol: markerSymbol3
        });

        var pointAt1 = {
            Name: "Southeast Market",
            State: "UT",
            City: "Salt Lake City",
            Street: "422 900 S"
        };

        var pointAt2 = {
            Name: "Mandalay Asian Market",
            State: "ID",
            City: "Boise",
            Street: "10658 W Overland Rd"
        };

        var pointAt3 = {
            Name: "Best Asian Market",
            State: "WA",
            City: "Spokane",
            Street: "2022 E Sprague Ave"
        };


var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
          attributes: pointAt1,
        popupTemplate: {
            // autocasts as new PopupTemplate()
            title: "{Name}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Name"
                  },
                  {
                    fieldName: "State"
                  },
                  {
                    fieldName: "City"
                  },
                  {
                    fieldName: "Street"
                  }
                ]
              }
            ]
          }
        });

  var pointGraphic2 = new Graphic({
          geometry: point2,
          symbol: markerSymbol2,
          attributes: pointAt2,
        popupTemplate: {
            // autocasts as new PopupTemplate()
            title: "{Name}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Name"
                  },
                  {
                    fieldName: "State"
                  },
                  {
                    fieldName: "City"
                  },
                  {
                    fieldName: "Street"
                  }
                ]
              }
            ]
          }
        });

        var pointGraphic3 = new Graphic({
          geometry: point3,
          symbol: markerSymbol3,
          attributes: pointAt3,
        popupTemplate: {
            // autocasts as new PopupTemplate()
            title: "{Name}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Name"
                  },
                  {
                    fieldName: "State"
                  },
                  {
                    fieldName: "City"
                  },
                  {
                    fieldName: "Street"
                  }
                ]
              }
            ]
          }
        });

        view.graphics.addMany([pointGraphic, pointGraphic2, pointGraphic3]);
  });