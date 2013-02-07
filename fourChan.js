(function ($) {

    function buildProtocolString(secure) {
        protocol = 'http';
        if (secure) {
            protocol += 's';
        }

        return protocol;
    }

    function buildImageUrl(protocol, type, number) {
        return imageUrl = protocol + '://static.4chan.org/image/title/' + number + '.' + type;

    }

    $.fn.appendTitleImage = function (options) {

        var settings = $.extend({
            'type':'jpg',
            'number':0,
            'secure':false
        }, options);

        var protocol = buildProtocolString(settings.secure);

        var image = '<img src="' + buildImageUrl(protocol, settings.type, settings.number) + '" />';

        this.append(image);

        return this;

    };

})(jQuery);