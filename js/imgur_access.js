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
            type: 'GET',
            cache: true,
            headers: {
                Authorization: 'Client-ID ' + clientId,
                Accept: 'application/json'
            },
            success: function (result) {
                success(result.data)
            },
            error: error
        });
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
                $images.append('<a href="{0}" title="{1}" data-gallery><img src="{2}" alt="{3}"></a>'.format(image.link, title, thumbnail, title));
            });
        });
    }

    loadImages();
});