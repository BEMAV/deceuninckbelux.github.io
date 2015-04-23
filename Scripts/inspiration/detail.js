var id = getUrlParameter('id');
var projects = JSON.parse(localStorage.getItem('projects'));
var project = projects[id - 1];
var title = project.projecttype + ' ' + project.location + ' - ' + project.buildingstyle;


$(function () {
    $('meta[name=og\\:title]').attr('content', 'Deceuninck Inspiratie: ' + project.buildingstyle + ' ' + project.location + ' - ' + project.series);
    $('meta[name=og\\:description]').attr('content', project.buildingstyle + ' ' + project.location + ' - ' + project.series + ' ' + project.colortype + ' ' + project.color + ' | ' + project.quote);


    $('.title').append($('<h1></h1>')
                .append(title));
    $('.quote').append($('<h3></h3>')
                .addClass('quote')
                .append('"' + project.quote + '"'));

    switch (project.producttitle) {
        case 'Ramen & deuren':
        case 'Fenêtres & portes':
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('windowsdoors')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-map-marker')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Locatie'))
                                    .append($('<p></p>')
                                        .append(project.location + ', ' + project.country))));
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('windowsdoors')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-home')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Bouwstijl'))
                                    .append($('<p></p>')
                                        .append(project.buildingstyle))));
            if (project.customer !== '') {
                $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('windowsdoors')
                                    .append($('<a></a>')
                                        .attr('href', project.websitecustomer)
                                        .attr('target', '_blank')
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemicon')
                                            .append($('<i></i>')
                                                .addClass('fa fa-wrench')))
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemcontent')
                                            .append($('<h4></h4>')
                                                .append('Fabrikant'))
                                            .append($('<p></p>')
                                                .append(project.customer)))));
            }
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('windowsdoors')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .addClass('windowsicon'))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Raamprofiel'))
                                    .append($('<p></p>')
                                        .append(project.series))
                                    .append($('<p></p>')
                                        .append(project.colortype))
                                    .append($('<p></p>')
                                        .append(project.color))
                                    .append($('<a></a>')
                                        .attr('href', 'http://www.deceuninck.be/nl/ramen-deuren/kleurencollectie-2015-2016.aspx')
                                        .attr('target', '_blank')
                                        .append($('<img></img>')
                                            .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg')))));

            if (project.colorcode === '0003' || project.colorcode === '0007' || project.colorcode === '0096' || project.colorcode === '1665' || project.colorcode === '6003' || project.colorcode === '6096' || project.colorcode === '9003' || project.colorcode === '1100' || project.colorcode === '1019' || project.colorcode === '1096') {
                $('.projectinfoitemcontent img').addClass('border');
            }

            $('.socialwrap').append($('<div></div')
                        .addClass('socialicons')
                        .addClass('windowsdoors')
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-facebook'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://twitter.com/home?status=' + project.buildingstyle + ' ' + project.location + ' - ' + project.series + '#deceuninck #pvc ' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-twitter'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'http://pinterest.com/pin/create/button/?url={URI-encoded URL of the page to pin}&media={URI-encoded URL of the image to pin}&description={optional URI-encoded description}' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-pinterest-p'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-linkedin'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-google-plus')))));

            break;
        case 'Dak & gevel':
        case 'Bardage & sous-toiture':
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('rooflinecladding')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-map-marker')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Locatie'))
                                    .append($('<p></p>')
                                        .append(project.location + ', ' + project.country))));
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('rooflinecladding')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-home')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Bouwstijl'))
                                    .append($('<p></p>')
                                        .append(project.buildingstyle))));
            if (project.customer !== '') {
                $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<a></a>')
                                        .attr('href', project.websitecustomer)
                                        .attr('target', '_blank')
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemicon')
                                            .append($('<i></i>')
                                                .addClass('fa fa-wrench')))
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemcontent')
                                            .append($('<h4></h4>')
                                                .append('Plaatser'))
                                            .append($('<p></p>')
                                                .append(project.customer)))));
            }
            if (project.producttype === 'Gevel' || project.producttype === 'Façade') {
                if (project.productcode === 'p9576' || project.productcode === 'p9596') {
                    $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('claddingicon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Gevel'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<p></p>')
                                            .append(project.color))
                                        .append($('<a></a>')
                                            .attr('href', 'http://www.deceuninck.be/nl/dak-gevel/twinson-gevelbekleding-kleuren.aspx')
                                            .attr('target', '_blank')
                                            .append($('<img></img>')
                                                .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg')))));
                }
                else if (project.productcode === 'p1024' || project.productcode === 'p1036') {
                    $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('claddingicon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Gevel'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<p></p>')
                                            .append(project.colortype))
                                        .append($('<p></p>')
                                            .append(project.color))
                                        .append($('<a></a>')
                                            .attr('href', 'http://www.deceuninck.be/nl/dak-gevel/standaard-gevelbekleding-pvc/standaard-gevelbekleding-pvc-kleuren.aspx')
                                            .attr('target', '_blank')
                                            .append($('<img></img>')
                                                .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg')))));
                }
                else if (project.productcode === 'p2750') {
                    $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('claddingicon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Gevel'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<p></p>')
                                            .append(project.colortype))
                                        .append($('<p></p>')
                                            .append(project.color))
                                        .append($('<a></a>')
                                            .attr('href', 'http://www.deceuninck.be/nl/dak-gevel/premium-gevelbekleding-pvc-kleuren.aspx')
                                            .attr('target', '_blank')
                                            .append($('<img></img>')
                                                .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg')))));
                }
            }
            if (project.producttype === 'Dak' || project.producttype === 'Sous-toiture') {
                if (project.colortype === 'Twinson') {
                    $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('rooficon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Dak'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<p></p>')
                                            .append(project.color))
                                        .append($('<img></img>')
                                            .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg'))));
                }
                else {
                    $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('rooflinecladding')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('rooficon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Dak'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<p></p>')
                                            .append(project.colortype))
                                        .append($('<p></p>')
                                            .append(project.color))
                                        .append($('<a></a>')
                                            .attr('href', 'http://www.deceuninck.be/nl/ramen-deuren/kleurencollectie-2015-2016.aspx')
                                            .attr('target', '_blank')
                                            .append($('<img></img>')
                                                .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg')))));
                }
            }
            if (project.colorcode === '0003' || project.colorcode === '0007' || project.colorcode === '0096' || project.colorcode === '1665' || project.colorcode === '6003' || project.colorcode === '6096' || project.colorcode === '9003' || project.colorcode === '1100' || project.colorcode === '1019' || project.colorcode === '1096') {
                $('.projectinfoitemcontent img').addClass('border');
            }

            $('.socialwrap').append($('<div></div')
                        .addClass('socialicons')
                        .addClass('rooflinecladding')
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-facebook'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://twitter.com/home?status=' + project.buildingstyle + ' ' + project.location + ' - ' + project.series + '#deceuninck #pvc ' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-twitter'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-pinterest-p'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-linkedin'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-google-plus')))));

            break;

        case 'Tuintoepassingen':
        case 'Aménagement extérieur':
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('outdoorliving')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-map-marker')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Locatie'))
                                    .append($('<p></p>')
                                        .append(project.location + ', ' + project.country))));
            $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('outdoorliving')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .append($('<i></i>')
                                        .addClass('fa fa-home')))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Bouwstijl'))
                                    .append($('<p></p>')
                                        .append(project.buildingstyle))));
            if (project.customer !== '') {
                $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('outdoorliving')
                                    .append($('<a></a>')
                                        .attr('href', project.websitecustomer)
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemicon')
                                            .append($('<i></i>')
                                                .addClass('fa fa-wrench')))
                                        .append($('<div></div>')
                                            .addClass('projectinfoitemcontent')
                                            .append($('<h4></h4>')
                                                .append('Plaatser'))
                                            .append($('<p></p>')
                                                .append(project.customer)))));
            }
            if (project.producttype === 'Tuinomheining' || project.producttype === 'Clôture') {
                $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('outdoorliving')
                                .append($('<a></a>')
                                        .attr('href', 'http://www.deceuninck.be/nl/tuintoepassingen/tuinafsluitingen.aspx')
                                        .attr('target', '_blank')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .addClass('fenceicon'))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                .append($('<h4></h4>')
                                    .append('Tuinomheining'))
                                .append($('<p></p>')
                                    .append(project.series))
                                .append($('<p></p>')
                                    .append(project.color))
                                .append($('<a></a>')
                                        .attr('href', 'http://www.deceuninck.be/nl/ramen-deuren/kleurencollectie-2015-2016.aspx')
                                        .attr('target', '_blank')
                                    .append($('<img></img>')
                                        .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg'))))));
            }
            if (project.producttype === 'Terras' || project.producttype === 'Terrasse') {
                $('.projectinfo').append($('<div></div>')
                                .addClass('projectinfoitem')
                                .addClass('outdoorliving')
                                .append($('<a></a>')
                                        .attr('href', 'http://www.deceuninck.be/nl/tuintoepassingen/twinson-terras.aspx')
                                        .attr('target', '_blank')
                                .append($('<div></div>')
                                    .addClass('projectinfoitemicon')
                                    .addClass('terraceicon'))
                                .append($('<div></div>')
                                    .addClass('projectinfoitemcontent')
                                    .append($('<h4></h4>')
                                        .append('Terras'))
                                    .append($('<p></p>')
                                        .append(project.series))
                                    .append($('<p></p>')
                                        .append(project.colortype))
                                    .append($('<p></p>')
                                        .append(project.color))
                                    .append($('<a></a>')
                                        .attr('href', 'http://www.deceuninck.be/nl/ramen-deuren/kleurencollectie-2015-2016.aspx')
                                        .attr('target', '_blank')
                                        .append($('<img></img>')
                                            .attr('src', '/Content/inspiration/images/Colors/' + project.colorcode + '.jpg'))))));
            }
            if (project.colorcode === '0003' || project.colorcode === '0007' || project.colorcode === '0096' || project.colorcode === '1665' || project.colorcode === '6003' || project.colorcode === '6096' || project.colorcode === '9003' || project.colorcode === '1100' || project.colorcode === '1019' || project.colorcode === '1096') {
                $('.projectinfoitemcontent img').addClass('border');
            }
            $('.socialwrap').append($('<div></div')
                        .addClass('socialicons')
                        .addClass('outdoorliving')
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-facebook'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://twitter.com/home?status=' + project.buildingstyle + ' ' + project.location + ' - ' + project.series + '#deceuninck #pvc ' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-twitter'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-pinterest-p'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-linkedin'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-google-plus')))));

            break;

        case 'Interieur':
        case 'Intérieure':
            $('.projectinfo').append($('<div></div>')
                                    .addClass('projectinfoitem')
                                    .addClass('interior')
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemicon')
                                        .addClass('interioricon'))
                                    .append($('<div></div>')
                                        .addClass('projectinfoitemcontent')
                                        .append($('<h4></h4>')
                                            .append('Interieur'))
                                        .append($('<p></p>')
                                            .append(project.series))
                                        .append($('<a></a>')
                                            .attr('href', 'http://www.deceuninck.be/nl/ramen-deuren/kleurencollectie-2015-2016.aspx')
                                            .attr('target', '_blank')
                                            .append($('<img></img>')
                                                .addClass('decoramic')
                                                .attr('src', '/Content/inspiration/images/Colors/1161.jpg'))
                                            .append($('<p>Stone wit</p>'))
                                            .append($('<img></img>')
                                                .addClass('decoramic')
                                                .attr('src', '/Content/inspiration/images/Colors/1162.jpg'))
                                            .append($('<p>Stone grijs</p>'))
                                            .append($('<img></img>')
                                                .addClass('decoramic')
                                                .attr('src', '/Content/inspiration/images/Colors/1163.jpg'))
                                            .append($('<p>Stone zwart</p>')))));
            $('.socialwrap').append($('<div></div')
                        .addClass('socialicons')
                        .addClass('interior')
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-facebook'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://twitter.com/home?status=' + project.buildingstyle + ' ' + project.location + ' - ' + project.series + '#deceuninck #pvc ' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-twitter'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-pinterest-p'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-linkedin'))))
                        .append($('<div></div>')
                            .addClass('icon')
                            .append($('<a></a>')
                                .attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                                .attr('target', '_blank')
                                .append($('<i></i>')
                                    .addClass('fa fa-google-plus')))));
            break;
    };

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

});


function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}