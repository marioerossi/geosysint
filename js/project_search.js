$(function () {
    var projects = [];

    $('#projects > li > a:first-child').each(function (index) {
        projects.push($(this).text());
    })

    var f = new Fuse(projects);

    function handleSearch() {
        function toggleAll(bool) {
            $('#projects > li').each(function (index) {
                $(this).toggle(bool);
            });
        }

        var search = $.trim($("#search-projects").val());
        if (search === null || search === '') {
            toggleAll(true);
            return;
        }
        search = search.substring(0, 32); // Fuse suports a maximum length of 32
        var result = f.search(search);
        if (result.length === 0) {
            toggleAll(false);
        } else {
            $('#projects > li').each(function (index) {
                $("#search-projects").toggle(!$.inArray(index, result));
            });
        }
    }

    $('#search-projects').keyup(handleSearch);

    $('.search-form .form-group').hover(function () {
        $(this).toggleClass("hover", true);
    },
        function () {
            var search = $.trim($("#search-projects").val());
            if (search === null || search === '') {
                $(this).toggleClass("hover", false);
            }
        });
});