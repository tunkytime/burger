$(document).on("click", ".devoured", function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    $.ajax({
        url: "/api/burger/id" + id,
        method: "PUT",
        data: {
            burger_name: $("#addBurger").val().trim()
        }
    }).then(function (res) {
        console.log(res)
        location.reload();
    });
});

$(document).on("click", ".delete", function (e) {
    e.preventDefault();
    console.log("deleted!");
});

$(document).on("click", ".addBurger", function (e) {
    e.preventDefault();
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: {
            burger_name: $("#addBurger").val().trim()
        }
    }).then(function (res) {
        console.log(res)
    });
});