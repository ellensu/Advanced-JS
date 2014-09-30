console.log("javascript working!");
 // Just to test. 
$(document).ready(function() {
  loadJSON();

    $("#refresh-button").click(function() {
      //$("#list").empty();
      loadJSON();

      });

var loadJSON = function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    $("#list").empty(); //empty the list after json is called
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var newStory = $("<li><a></a></li>")
        .find("a")
        .attr("href", "http://www.reddit.com/" + story.permalink)
        .html(story.title)
        .end();
      var upVotes = $("<p>" + story.ups + " upvotes" + "</p>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      //elem.append
      $("#list").append(newStory,upVotes,"<br>");
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  })
});
}