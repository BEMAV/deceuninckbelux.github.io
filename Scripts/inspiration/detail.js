var id = getUrlParameter('id');
var projects = [];


$(function () {

    if (project.img1 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img1)));
    }
    if (project.img2 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img2)));
    }
    if (project.img3 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img3)));
    }
    if (project.img4 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img4)));
    }
    if (project.img5 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img5)));
    }
    if (project.img6 !== '') {
        $('.pgwSlider').append($('<li></li>')
                                    .append($('<img>')
                                        .attr('src', '/Content/inspiration/Images/Projects/' + project.img6)));
    }

    $('.pgwSlider').pgwSlider({
        listPosition: 'right',
        displayControls: true,
        verticalCentering: true
    });
}