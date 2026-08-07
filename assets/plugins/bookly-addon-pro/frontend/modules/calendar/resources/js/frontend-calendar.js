(function ($) {
    window.booklyFrontendCalendar = function (Options) {
        let $container = $('.' + Options.calendar_js);
        if (!$container.length) {
            return;
        }
        // Special locale for moment
        moment.locale('bookly', {
            months: BooklyL10nFrontendCalendar.datePicker.monthNames,
            monthsShort: BooklyL10nFrontendCalendar.datePicker.monthNamesShort,
            weekdays: BooklyL10nFrontendCalendar.datePicker.dayNames,
            weekdaysShort: BooklyL10nFrontendCalendar.datePicker.dayNamesShort,
            meridiem: function (hours, minutes, isLower) {
                return hours < 12
                    ? BooklyL10nFrontendCalendar.datePicker.meridiem[isLower ? 'am' : 'AM']
                    : BooklyL10nFrontendCalendar.datePicker.meridiem[isLower ? 'pm' : 'PM'];
            },
        });
        let options = {
            view: 'timeGridWeek',
            views: {
                dayGridMonth: {
                    dayHeaderFormat: function (date) {
                        return moment(date).locale('bookly').format('ddd');
                    },
                    displayEventEnd: true,
                    dayMaxEvents: true
                },
                timeGridDay: {
                    dayHeaderFormat: function (date) {
                        return moment(date).locale('bookly').format('dddd');
                    },
                    pointer: true
                },
                timeGridWeek: {pointer: true},
                resourceTimeGridDay: {pointer: true}
            },
            hiddenDays: BooklyL10nFrontendCalendar.hiddenDays,
            slotDuration: BooklyL10nFrontendCalendar.slotDuration,
            slotMinTime: BooklyL10nFrontendCalendar.slotMinTime,
            slotMaxTime: BooklyL10nFrontendCalendar.slotMaxTime,
            scrollTime: BooklyL10nFrontendCalendar.scrollTime,
            moreLinkContent: function (arg) {
                return BooklyL10nFrontendCalendar.more.replace('%d', arg.num)
            },
            flexibleSlotTimeLimits: true,
            eventStartEditable: false,
            eventDurationEditable: false,
            allDaySlot: false,

            slotLabelFormat: function (date) {
                return moment(date).locale('bookly').format(BooklyL10nFrontendCalendar.mjsTimeFormat);
            },
            eventTimeFormat: function (date) {
                return moment(date).locale('bookly').format(BooklyL10nFrontendCalendar.mjsTimeFormat);
            },
            dayHeaderFormat: function (date) {
                return moment(date).locale('bookly').format('ddd, D');
            },
            listDayFormat: function (date) {
                return moment(date).locale('bookly').format('dddd');
            },
            firstDay: BooklyL10nFrontendCalendar.datePicker.firstDay,
            locale: BooklyL10nFrontendCalendar.locale.replace('_', '-'),
            buttonText: {
                today: BooklyL10nFrontendCalendar.today,
                dayGridMonth: BooklyL10nFrontendCalendar.month,
                timeGridWeek: BooklyL10nFrontendCalendar.week,
                timeGridDay: BooklyL10nFrontendCalendar.day,
                resourceTimeGridDay: BooklyL10nFrontendCalendar.day,
                listWeek: BooklyL10nFrontendCalendar.list
            },
            noEventsContent: BooklyL10nFrontendCalendar.noEvents,
            eventSources: [{
                url: ajaxurl,
                method: 'POST',
                extraParams: function () {
                    let data = {
                        action: 'bookly_pro_get_calendar_appointments',
                        csrf_token: BooklyL10nGlobal.csrf_token,
                    };
                    if (Options.attributes.hasOwnProperty('location_id')) {
                        data.location_id = Options.attributes.location_id;
                    }
                    if (Options.attributes.hasOwnProperty('staff_id')) {
                        data.staff_id = Options.attributes.staff_id;
                    }
                    if (Options.attributes.hasOwnProperty('service_id')) {
                        data.service_id = Options.attributes.service_id;
                    }
                    return data;
                }
            }],
            eventBackgroundColor: '#ccc',
            loading: function (isLoading) {
                if (isLoading) {
                    $('.bookly-ec-loading').show();
                } else {
                    $('.bookly-ec-loading').hide();
                }
            },
            theme: function (theme) {
                theme.button = 'btn btn-default';
                theme.buttonGroup = 'btn-group';
                theme.active = 'active';
                return theme;
            }
        };
        let dateSetFromDatePicker = false;

        // Init EventCalendar.
        let calendar = EventCalendar.create($container.get(0), $.extend(true, {}, options, {
            // General Display.
            headerToolbar: {
                start: 'prev,next today',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            // Views.
            view: getCookie('bookly_cal_view') ? getCookie('bookly_cal_view') : 'dayGridMonth',
            views: {
                resourceTimeGridDay: {
                    resources: [1],
                    filterResourcesWithEvents: BooklyL10nFrontendCalendar.filterResourcesWithEvents,
                    titleFormat: {year: 'numeric', month: 'short', day: 'numeric', weekday: 'short'}
                }
            },
            viewDidMount: function (view) {
                calendar.setOption('height', heightEC(view.type));
                setCookie('bookly_cal_view', view.type);
            },
            height: heightEC('dayGridMonth'),
            eventTimeFormat: function (start, end) {
                if (start.getTime() === end.getTime()) {
                    return moment(start).locale('bookly').format(BooklyL10nFrontendCalendar.mjsTimeFormat);
                } else {
                    return moment(start).locale('bookly').format(BooklyL10nFrontendCalendar.mjsTimeFormat) + ' - ' + moment(end).locale('bookly').format(BooklyL10nFrontendCalendar.mjsTimeFormat);
                }
            },
        }));

        $('.ec-toolbar .ec-title', $container).daterangepicker({
            parentEl: '.' + Options.calendar_js,
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: false,
            locale: BooklyL10nFrontendCalendar.datePicker
        }, function (start) {
            dateSetFromDatePicker = true;
            if (calendar.getView().type !== 'timeGridDay' && calendar.getView().type !== 'resourceTimeGridDay') {
                calendar.setOption('highlightedDates', [start.toDate()]);
            }
            calendar.setOption('date', start.toDate());
        });

        function heightEC(view_type) {
            let calendar_tools_height = 71,
                day_head_height = 28,
                slot_height = 17.85,
                weeks_rows = 5,
                day_slots_count = 5,
                height = (calendar_tools_height + (day_slots_count * slot_height + day_head_height) * weeks_rows)
            ;
            if (view_type != 'dayGridMonth') {
                if ($('.ec-content', $container).height() < height) {
                    height = 'auto';
                }
            }
            return height === 'auto' ? 'auto' : (calendar_tools_height + height) + 'px';
        }

        $(window).on('resize', function () {
            calendar.setOption('height', heightEC(calendar.getOption('view')));
        });

        /**
         * Set cookie.
         *
         * @param key
         * @param value
         */
        function setCookie(key, value) {
            var expires = new Date();
            expires.setFullYear(expires.getFullYear() + 3);
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }

        /**
         * Get cookie.
         *
         * @param key
         * @return {*}
         */
        function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }
    }
})(jQuery);