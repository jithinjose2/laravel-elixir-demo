var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.sass('app.scss');

    mix.scripts([
        "/components/jquery/dist/jquery.js",
        "/components/bootstrap/dist/js/bootstrap.js"
    ],'public/js/components.js', 'resources/assets');

    mix.version(['public/js/components.js', 'public/css/app.css']);

});
