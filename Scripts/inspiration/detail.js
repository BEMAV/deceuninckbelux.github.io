var projectFile = document.location.href.match(/[^\/]+$/)[0];
var project = projectFile.substr(0, projectFile.lastIndexOf('.'));
$(function () {
    for (var i=1; i < 5;i++) {
        var img = '/Content/inspiration/Images/Projects/' + project + i+'.jpg';
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