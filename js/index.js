
var $ = require('./lib/jquery-3.2.1.min.js')
var Carousel = require('./com/carousel.js')
var Gotop = require('./com/gotop.js')
var Lazyload = require('./com/lazyload.js')



new Gotop($('body'));

Carousel.init($('#header .carousel'))

Lazyload.init($('.news-content'))