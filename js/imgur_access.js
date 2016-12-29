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
        const thumbnailChars = ['s', 'b', 't', 'm', 'l', 'h'];
        var thumbnailChar = thumbnailChars[$images.data('thumbnail-size')] || 'b';
        getAlbumImages(id, function (images) {
            images.forEach(function (image, index) {
                var index = image.link.lastIndexOf('.');
                var thumbnail = image.link.slice(0, index) + thumbnailChar + image.link.slice(index);
                var title = !image.title || image.title == 'null' ? undefined : image.title;
                var description = !image.description || image.description == 'null' ? undefined : image.description;
                $('<a/>')
                    .append($('<img>').prop('src', thumbnail).prop('alt', description))
                    .prop('href', image.link)
                    .prop('title', description)
                    .attr('data-gallery', '')
                    .appendTo($images)
            });
        });
    }

    loadImages();
});