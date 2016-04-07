$(document).ready(function() {

  var $first_name = $('#first_name');
  var $last_name = $('#last_name');
  var $email = $('#email');
  var $phone_number = $('#phone_number');

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  function generateContact(contact) {

    var row = $("<tr>")
                .append($("<td>").text(contact.first_name))
                .append($("<td>").text(contact.last_name))
                .append($("<td>").text(contact.email))
                .append($("<td>").text(contact.phone_number));

    var deleteButton = $("<button>")
                .text("Delete")
                .addClass('btn btn-primary btn-xs delete-contact')
                .data('contact-id', contact.id)
                // add in some kind of JS callback for the deleteContact function
                // .on('click', deleteContact(contact));

    row.append(
      $("<td>").append(deleteButton)
    );

    return row;

  }


  $('#contacts').on('click', '.delete-contact', function() {
    $.ajax({
      method: "DELETE",
      url: "/contacts/" + $(this).data('contact-id'),
    })
    .done(function(response){
      var contactsTable = $("#contacts tbody");
      contactsTable.empty();

      response["contacts"].forEach(function(element){
        var contactRow = generateContact(element);
        contactsTable.append(contactRow);
      })

    })
  });

  $.ajax({
    method: "GET",
    url: "/contacts"
  })
  .done(function(response) {

    var contactsTable = $("#contacts tbody");

    response["contacts"].forEach(function(element){
      var contactRow = generateContact(element);
      contactsTable.append(contactRow);
    })

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

