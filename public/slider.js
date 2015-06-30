$(function(){
      var slider = new BeaverSlider({
        structure: {
          container: {
            id: "my-slider",
            width: 720,
            height: 420
          }
        },
        content: {
          images: [
            "images/baseball.jpg",
            "images/nba.jpg",
            "images/nfl.jpg",
            "images/soccer.jpg"
          ],
        },
        animation: {
          effects: effectSets["slider: big set 2"],
          interval: 1000
        }
      }); 
	});