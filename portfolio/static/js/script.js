
$(document).ready(function() {
    var speed = 400;
    $('#gpoy').hoverIntent(function() {
        $('#gpoy .hover').animate({
            opacity: 1
        },{queue:false,duration:speed});
        $('#gpoy .normal').animate({
            opacity: 0
        }, {queue:false,duration:speed});
    }, function() {
        $('#gpoy .hover').animate({
            opacity: 0
        }, {queue:false,duration:speed});
        $('#gpoy .normal').animate({
            opacity: 1
        }, {queue:false,duration:speed});
    });

    var tooltip = $('<div class="tooltip"></div>');
    $('body').append(tooltip);

    $('area').hover(function(e) {
        $('#maphover').addClass($(this).attr('alt'));
        $('#infografik .rightside').addClass($(this).attr('alt'));
        $('table .'+$(this).attr('alt')).addClass('aktivtd');
        $('table .'+$(this).attr('alt')).closest('div').addClass('aktivkat');

        /* Tooltip */
        var toolcon = $(this).attr('title');
        $(this).attr('title', '');
        tooltip.html(toolcon);
        $(this).data('titleCon',toolcon);

        var positX = e.pageX;
        var positY = e.pageY;

        positX = positX - (tooltip.width / 2) -4;
        positY +=30;

        tooltip.css({'top':positY,'left':positX}).show();
    }, function() {
        $('#maphover').removeClass($(this).attr('alt'));
        $('#infografik .rightside').removeClass($(this).attr('alt'));
        $('table .'+$(this).attr('alt')).removeClass('aktivtd');
        $('table .'+$(this).attr('alt')).closest('div').removeClass('aktivkat');

        /* Tooltip */
        tooltip.hide();
        $(this).attr('title',$(this).data('titleCon'));
    }).mousemove(function(e) {
        var positX = e.pageX;
        var positY = e.pageY;

        positX = positX - (tooltip.width() / 2) -4;
        positY += 30;

        tooltip.css({'top':positY,'left':positX});
    });
    $('tr').hover(function() {
        var cur = $(this).find('td').attr('class');
        $('#maphover').addClass(cur);
        $('#infografik .rightside').addClass(cur);
        $('table .'+cur).addClass('aktivtd');
        $('table .'+cur).closest('div').addClass('aktivkat');
    }, function() {
        var cur = $(this).find('td').attr('class').split(" ", 1);
        cur = String(cur);
        $('#maphover').removeClass(cur);
        $('#infografik .rightside').removeClass(cur);
        $('table .'+cur).removeClass('aktivtd');
        $('table .'+cur).closest('div').removeClass('aktivkat');
    });
    $('.gehirndesign, .gehirncoding, .gehirnspiele').hover(function() {
        var cur = $(this).find('th').attr('class');
        $('#maphover').addClass(cur);
        $('#infografik .rightside').addClass(cur);
        $('table .'+cur).addClass('aktivtd');
        $('table .'+cur).closest('div').addClass('aktivkat');
    }, function() {
        var cur = $(this).find('th').attr('class').split(" ", 1);
        cur = String(cur);
        $('#maphover').removeClass(cur);
        $('#infografik .rightside').removeClass(cur);
        $('table .'+cur).removeClass('aktivtd');
        $('table .'+cur).closest('div').removeClass('aktivkat');
    });
});
