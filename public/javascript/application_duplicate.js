$(document).ready(function() {


  var $first_name = $('#first_name');
  var $last_name = $('#last_name');
  var $email = $('#email');
  var $phone_number = $('#phone_number')
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $.ajax({
    method: "GET",
    url: "/contacts"
  })
  .done(function(response) {
    var html = "<ul>" 

    response["contacts"].forEach(function(el){
      html += "<li>" + el.first_name + " " + el.last_name  + "</li>"
    })

    html += "</ul>"
    $("#contacts").append(html)
  })

  $('#new-contact').on('submit', function() {

    var contact = {
      first_name: $first_name.val(),
      last_name: $last_name.val(),
      email: $email.val(),
      phone_number: $phone_number.val(),
    };

    $.ajax({
      method: "POST",
      url: "/contacts",
      // need to get the below working..
      data: JSON.stringify(contact),
      //JSON.stringify({first_name: "Joe", last_name: "Doe", email: "a@a.com", phone_number: "123-4567"})
    })
    .done(function(response){
      
    })
    return false;
  })

});