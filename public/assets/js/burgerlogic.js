console.log('burger logic connected');

$(function () {
    $(".devour-button").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);

        var devour = $(this).data("devour");
        console.log(devour);
        var newEatState = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat-state to", devour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#enter-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burgers: $("#create").val().trim(),
          devoured: 0
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });






});
