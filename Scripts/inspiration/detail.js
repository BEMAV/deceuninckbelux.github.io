var project = document.location.href.match(/[^\/]+$/)[0];
$(function () {
    for (var i; i < 5;i++) {
        var img = '/Content/inspiration/Images/Projects/' + project + i+'jpg';
        $('.pgwSlider').append($('<li></li>')
                                   .append($('<img>')
                                       .attr('src', img)));
    }

    $('.pgwSlider').pgwSlider({
        listPosition: 'right',
        displayControls: true,
        verticalCentering: true
    });
});