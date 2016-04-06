$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $.ajax({
    method: "GET",
    url: "/contacts"
  })
  .done(function(response) {
    console.log(response);
    var html = "<ul>" 

    response["contacts"].forEach(function(el){
      html += "<li>" + el.first_name + " " + el.last_name  + "</li>"
    })

    html += "</ul>"
    $("#contacts").append(html)
  })

  $.ajax({
    method: "POST",
    url: "/contacts",
    // need to get the below working..
    data: "javascript object pass to backend"
  })
  .done(function(response){
    console.log(response)
  })




});

