(function ($) {
    $.fn.appendTitleImage = function (options) {

        var settings = $.extend({
            'animated':false,
            'number':0
        }, options);

        var image = "";
        if (settings.animated) {
            image = '<img src="https://static.4chan.org/image/title/' + settings.number + '.gif">';
        } else {
            image = '<img src="https://static.4chan.org/image/title/' + settings.number + '.jpg">';
        }


        this.append(image);

        return this;

    };
})(jQuery);