function displayResults(scrapedData) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  scrapedData.forEach(function(test) {
    // Append each of the animal's properties to the table
    var tr = $("<tr>").append(
      $("<td>").text(test.title),
      $("<td>").text(test.link)
    );

    $("tbody").append(tr);
  });
}

$.getJSON("/all", function(test) {
  // Call our function to generate a table body
  displayResults(test);
});
