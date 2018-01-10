
    $(document).ready(function(){
        $('nav a').each(function(){
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('active');
                $(this).removeClass('nav a:hover');
            }
        });

        
    });

