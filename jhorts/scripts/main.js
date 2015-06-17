document.addEventListener('DOMContentLoaded', function() {

    var logo = document.getElementById('logo');
    var args = { content: 'Hello URBN, thanks for checking out my app.' };
    var helloUrban = new Banner(args);

    logo.addEventListener('click', function() {
        helloUrban.open();
    });

    helloUrban.init();

    console.log("%c  Thanks URBN!  ", "color: #ffffff; font-family: helvetica, sans-serif; font-size: x-large; font-weight: bold; background: #8a8bc9");
});
