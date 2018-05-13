var url = "../JSON/stuff.json";

$.getJSON(url, function (response) {
    var peopleStatus = '<ul>';
    $.each(response, function (index, value) {
        console.log(index, value);
    });
});