    $(document).ready(function() {
        $(".a").click(function() {
                $(".b").slideToggle();
            });

            $(window).resize(function() {
                if(window.innerWidth>=991) {
                    $(".b").show();
                }
            });

            $(window).resize(function() {
                if(window.innerWidth<=990) {
                    $(".b").hide();
                }
            });
        });   
    