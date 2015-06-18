document.addEventListener('DOMContentLoaded', function() {

    // create and open banner events
    var logo = document.getElementById('logo');
    var args = { content: 'Hello URBN!' };

    var helloUrban = new Banner(args);

    logo.addEventListener('click', function() {
        helloUrban.open();
    });
    // end

    helloUrban.init();
    console.log("%c  Thanks URBN!  ", "color: #ffffff; font-family: helvetica, sans-serif; font-size: x-large; font-weight: bold; background: #8a8bc9");
});
