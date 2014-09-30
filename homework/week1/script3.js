console.log("javascript working!");

 // Just to test. 
$(document).ready(function() {
    $("#refresh-button").click(function() {
      $("#list").empty();
      console.log("refreshed!");
      window.location.reload();
      });
  $.get("https://api.whitehouse.gov/v1/petitions.json?limit=3&offset=0&createdBefore=1352924535", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var petition = response.data.children;
    for(var i in petitions) {
      form = petitions[i].results;
      var title = $("<li><a></a></li>")
        .find("a")
        .attr("href", petition.url)
        .html(petition.title)
        .end();
      //var upVotes = $("<li>" + story.ups + " upvotes" + "</li>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $("#list").append(title,"<br>");
      // Look at the JS console in Chrome to see what story looks like
      console.log(petition);


    }
  })
});