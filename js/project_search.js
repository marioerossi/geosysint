$(function () {
    var projectsList = $("#projects");
    var projects = $("#projects > li");
    var projectsTitles = [];

    projects.each(function (index) {
        projectsTitles.push({
            index: index, // Used by Fuse as an id
            text: this.innerText // Used by Fuse for search
        });
    });

    var options = {
        id: "index",
        caseSensitive: false,
        shouldSort: true,
        matchAllTokens: true,
        threshold: 0.4,
        location: 0,
        distance: 50,
        maxPatternLength: 32,
        keys: ["text"],
        verbose: false
    };
    var fuse = new Fuse(projectsTitles, options);

    function handleSearch() {
        var search = $.trim($("#search-projects").val()).substring(0, options.maxPatternLength);
        if (search === "" || search === null) {
            projects.detach("li"); // Remove all items
            for (var i = 0; i < projects.length; i++) // Add back all items
                projectsList.append(projects[i]);
        } else {
            var result = fuse.search(search);
            projects.detach("li"); // Remove all items
            for (var i = 0; i < result.length; i++) // Add back items returned from search
                projectsList.append(projects[result[i]]);
        }
    }

    var inputBox = $('#search-projects');
    var oldInput = inputBox.val();
    inputBox.on('input', function () {
        var newVal = inputBox.val();
        if (oldInput != newVal) {
            handleSearch();
            oldInput = newVal
        }
    });

    function hoverOn() {
        $(this).toggleClass("hover", true);
    }

    function hoverOff() {
        var search = $.trim($("#search-projects").val());
        if (search === null || search === '') {
            $(this).toggleClass("hover", false);
        }
    }

    $('.search-form .form-group').hover(hoverOn, hoverOff);
    $('.search-form .form-group').focusin(hoverOn);
    $('.search-form .form-group').focusout(hoverOff);
});