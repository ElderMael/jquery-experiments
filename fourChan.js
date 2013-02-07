(function ($) {
    $.fn.appendTitleImage = function (options) {

        var settings = $.extend({
            'animated':false,
            'number':0
        }, options);

        var image = '<img src="https://static.4chan.org/image/title/' + settings.number;
        if (settings.animated) {
            image += '.gif">';
        } else {
            image += '.jpg">';
        }

        this.append(image);

        return this;

    };
})(jQuery);