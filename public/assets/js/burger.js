$(document).on("click", ".devoured", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT",
    }).then(function (res) {
        console.log(res)
        location.reload();
    })
});

$(document).on("click", ".delete", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.ajax({
        url: "/api/burger/" + id,
        method: "DELETE",
        data: {
            burger_name: $("#addBurger").val().trim()
        }
    }).then(function (res) {
        console.log(res)
        location.reload();
    })
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
        location.reload();
    });
});