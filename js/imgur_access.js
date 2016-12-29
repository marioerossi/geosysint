const clientId = '6a5400948b3b376';

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") { return "{"; }
        if (m == "}}") { return "}"; }
        return args[n];
    });
};

$(function () {
    function getAlbumImages(id, success, error) {
        $.ajax({
            url: 'https://api.imgur.com/3/album/' + encodeURIComponent(id) + '/images',
            localCache: true, // localStorage.clear() to reset this cache
            cacheTTL: 12, // In hours.
            cacheKey: 'imgur_album-' + id,
            type: 'GET',
            cache: true,
            dataType: 'json',
            headers: {
                Authorization: 'Client-ID ' + clientId,
                Accept: 'application/json'
            }
        }).done(function (response) {
            success(response.data)
        }).fail(error);
    }

    var $images = $('#images');

    function loadImages() {
        var id = $images.data('album-id');
        getAlbumImages(id, function (images) {
            images.forEach(function (image, index) {
                // thumbnail chars: s, b, t, m, l, h
                var index = image.link.lastIndexOf('.');
                var thumbnail = image.link.slice(0, index) + 't' + image.link.slice(index);
                var title = !image.title || image.title == 'null' ? '' : image.title;
                $('<a/>')
                    .append($('<img>').prop('src', thumbnail).prop('title', title))
                    .prop('href', image.link)
                    .prop('title', title)
                    .attr('data-gallery', '')
                    .appendTo($images)
            });
        });
    }

    loadImages();
});