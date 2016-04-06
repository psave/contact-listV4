$(document).ready(function() {

  var $first_name = $('#first_name');
  var $last_name = $('#last_name');
  var $email = $('#email');
  var $phone_number = $('#phone_number')
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  function generateContact(contact) {
    var html = "";
    html += "<tr>"
    html += "<td>" + contact.first_name + "</td>";
    html += "<td>" + contact.last_name + "</td>";
    html += "<td>" + contact.email + "</td>";
    html += "<td>" + contact.phone_number + "</td>";
    html += "</tr>"
    return html;
  }

  $.ajax({
    method: "GET",
    url: "/contacts"
  })
  .done(function(response) {
    var rows = "";
    response["contacts"].forEach(function(element){
      rows += generateContact(element)
    })

    $("#contacts tbody").append(rows)
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
      data: JSON.stringify(contact),
    })
    .done(function(response){
      var row = "";
      row += generateContact(response)
      $("#contacts tbody").append(row)
      // Below is not clearing the form just yet..
      $('#new-contact input').val(''); 
    })
    return false;
  })

});

