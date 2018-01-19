    $(document).ready(function(){
        $(function(){
            $('li > a').each(function(){
                if ($(this).prop('href') == window.location.href) {
                    $(this).addClass('active');
                	} else {
                		$(this).addClass('nav_links');
                	}
                });
              });
    });

