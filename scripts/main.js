$(function () {
    $('#timepicker').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime:'12:00'
    });
    $('#timepicker2').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $('#timepicker3').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $('#timepicker4').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $('#timepicker5').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $('#timepicker6').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $('#timepicker7').timepicker({
        minuteStep: 15,
        template: 'dropdown',
        showMeridian: false,
        showSeconds: false,
        defaultTime: '12:00'
    });
    $(document).on('click', '.dropdown-menu.dropdown-menu-form', function (e) {
        e.stopPropagation();
    });
});