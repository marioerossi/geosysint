$(function () {
    var projects = $("#projects > li");
    var projectsList = $("#projects");

    var options = {
        id: "",
        caseSensitive: false,
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 50,
        maxPatternLength: 32,
        keys: ["innerText"]
    };
    var fuse = new Fuse(projects, options);

    function handleSearch() {
        var search = $.trim($("#search-projects").val()).substring(0, options.maxPatternLength);
        var result = search === "" || search === null ? projects : fuse.search(search);
        for (var i = 0; i < projects.length; i++)
            projects[i].remove();
        for (var i = 0; i < result.length; i++)
            projectsList.append(result[i]);
    }

    var inputBox = $('#search-projects');
    var oldInput = inputBox.val();
    inputBox.on('input', function (e) {
        var newVal = inputBox.val();
        if (oldInput != newVal) {
            handleSearch();
            console.log("HIAZ");
            oldInput = newVal
        }
    });

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