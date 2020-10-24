const csvFilePath ='<path to csv file>'
const csv=require('csvtojson')
var fs = require("fs");
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var movieArr = jsonObj
    for (i = 0; i < movieArr.length(); i++) {
    var id = movieArr[i].omdb-api
    var queryURL = "https://www.omdbapi.com/?i=" + id + "&y=&plot=short&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      fs.appendFile("movie_info.csv", function(err) {

      if (err) {
        console.log(err);
      }
      else {
        console.log("Commit logged!");
      }
    
    });
    
    //aha this is where you have to figure out how to append the file! 
    });
    }
})






// we add a newline character to the command line argument
