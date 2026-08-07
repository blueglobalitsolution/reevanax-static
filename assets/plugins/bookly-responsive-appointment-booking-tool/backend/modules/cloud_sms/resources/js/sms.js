jQuery(function ($) {
    'use strict';

    const { today, getLocalTimeZone, parseDate } = window.BooklyDatatables.calendarDate;

    /**
     * Notifications Tab
     */
    BooklyNotificationsList();
    BooklyNotificationDialog();

    var $phone_input = $('#admin_phone');
    if (BooklyL10n.intlTelInput.enabled) {
        window.booklyIntlTelInput($phone_input.get(0), {
            preferredCountries: [BooklyL10n.intlTelInput.country],
            initialCountry: BooklyL10n.intlTelInput.country,
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : '';
                    callback(countryCode);
                });
            }
        });
    }

    $('#send_test_sms').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: ajaxurl,
            data: {
                action: 'bookly_send_test_sms',
                csrf_token: BooklyL10nGlobal.csrf_token,
                phone_number: BooklyL10n.intlTelInput.enabled ? booklyGetPhoneNumber($phone_input.get(0)) : $phone_input.val(),
            },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    booklyAlert({success: [response.message]});
                } else {
                    booklyAlert({error: [response.message]});
                }
            }
        });
    });

    $('[data-action=save-administrator-phone]')
        .on('click', function (e) {
            e.preventDefault();
            $.ajax({
                url: ajaxurl,
                method: 'POST',
                data: {
                    action: 'bookly_save_administrator_phone',
                    bookly_sms_administrator_phone: BooklyL10n.intlTelInput.enabled ? booklyGetPhoneNumber($phone_input.get(0)) : $phone_input.val(),
                    csrf_token: BooklyL10nGlobal.csrf_token
                },
                success: function (response) {
                    if (response.success) {
                        booklyAlert({success: [BooklyL10n.settingsSaved]});
                    }
                }
            });
        });

    /**
     * Campaigns Tab.
     */
    $('#campaigns').one('bookly:tab-show', function () {
        const campaignsTable = 'sms_mailing_campaigns';
        const campaignStateBadgeClass = {
            'pending':     'bookly:bg-blue-100 bookly:text-blue-800 bookly:border-blue-200',
            'waiting':     'bookly:bg-blue-100 bookly:text-blue-800 bookly:border-blue-200',
            'in-progress': 'bookly:bg-amber-100 bookly:text-amber-800 bookly:border-amber-200',
            'completed':   'bookly:bg-green-100 bookly:text-green-800 bookly:border-green-200',
            'canceled':    'bookly:bg-gray-100 bookly:text-gray-700 bookly:border-gray-200',
        };
        const campaignStateLabel = function (row) {
            switch (row.state) {
                case 'pending':     return row.send_at === null ? BooklyL10n.campaign.waiting : BooklyL10n.campaign.pending;
                case 'in-progress': return BooklyL10n.campaign.in_progress;
                case 'completed':   return BooklyL10n.campaign.completed;
                case 'canceled':    return BooklyL10n.campaign.canceled;
                default:            return row.state;
            }
        };
        let dt_campaigns;

        // Server (Ajax::getCampaignList) searches only by name and id.
        const campaignSearchableColumns = ['name', 'id'];
        const columns = [];
        $.each(BooklyL10n.datatables[campaignsTable].settings.columns, function (column, show) {
            switch (column) {
                case 'state':
                    columns.push({
                        data: column,
                        render: function (data, type, row) { return BooklyDatatables.escapeHtml(campaignStateLabel(row)); },
                        badge: function (row) {
                            const key = row.state === 'pending' && row.send_at === null ? 'waiting' : row.state;
                            return campaignStateBadgeClass[key] || campaignStateBadgeClass['canceled'];
                        },
                    });
                    break;
                case 'send_at':
                    columns.push({
                        data: column,
                        render: function (data) {
                            return data === null ? BooklyL10n.manual : moment(data).format(BooklyL10n.moment_format_date_time);
                        }
                    });
                    break;
                default:
                    columns.push({
                        data: column,
                        render: function (data) { return BooklyDatatables.escapeHtml(data); }
                    });
                    break;
            }
            columns[columns.length - 1].title = BooklyL10n.datatables[campaignsTable].titles[column] || column;
            columns[columns.length - 1].name = column;
            columns[columns.length - 1].show = show;
            columns[columns.length - 1].searchable = campaignSearchableColumns.indexOf(column) !== -1;
        });

        dt_campaigns = BooklyDatatables.showForm('bookly-' + campaignsTable + '-datatables', {
            ajax: {
                url: ajaxurl,
                method: 'POST',
                data: function (d) {
                    return $.extend({
                        action: 'bookly_get_campaign_list',
                        csrf_token: BooklyL10nGlobal.csrf_token,
                    }, d);
                }
            },
            columns: columns,
            tableSettings: Object.assign({}, BooklyL10n.datatables[campaignsTable], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
            edit: function (row) {
                BooklyCampaignDialog.showDialog(row.id, function () { dt_campaigns.reload(); });
            },
            checked: function (rows) {
                const actions = [];
                const runnable = rows.filter(function (row) { return row.send_at === null && row.state === 'pending'; });
                if (runnable.length > 0) {
                    actions.push({
                        label: BooklyL10n.run + ' (' + runnable.length + ')',
                        icon: 'play',
                        variant: 'outline',
                        click: function () {
                            BooklyCampaignDialog.runCampaign(runnable.map(function (row) { return row.id; }), function () { dt_campaigns.reload(); });
                        }
                    });
                }
                actions.push({
                    label: BooklyL10n.delete,
                    icon: 'trash',
                    variant: 'destructive',
                    click: function (selected) {
                        if (!confirm(BooklyL10n.areYouSure)) return;
                        dt_campaigns.setLoading(true);
                        $.ajax({
                            url: ajaxurl,
                            method: 'POST',
                            data: {
                                action: 'bookly_delete_campaigns',
                                csrf_token: BooklyL10nGlobal.csrf_token,
                                ids: selected.map(function (row) { return row.id; })
                            },
                            dataType: 'json',
                            success: function (response) {
                                if (response.success) {
                                    dt_campaigns.reload();
                                } else {
                                    dt_campaigns.setLoading(false);
                                    alert(response.data.message);
                                }
                            },
                            error: function () { dt_campaigns.setLoading(false); }
                        });
                    }
                });
                return actions;
            },
            saveSettings: function (settings) {
                $.post(ajaxurl, Object.assign({
                    action: 'bookly_update_table_settings',
                    table: campaignsTable,
                    csrf_token: BooklyL10nGlobal.csrf_token
                }, settings));
            },
            topToolbar: [{
                label: BooklyL10n.new_campaign,
                icon: 'plus',
                variant: 'default',
                click: function () {
                    BooklyCampaignDialog.showDialog(null, function () { dt_campaigns.reload(); });
                }
            }],
            searchFilter: { placeholder: BooklyL10n.quick_search, name: 'filter[search]' }
        });
    });

    /**
     * Mailing list Tab.
     */
    $('#mailing').one('bookly:tab-show', function () {
        const $ml_container = $('#mailing_lists');
        const $mr_container = $('#mailing_recipients');
        const ml = { columns: [], dt: null, list_id: null };
        const mr = { columns: [], $list_name: $('#bookly-js-mailing-list-name', $mr_container), dt: null };

        $(document.body).on('bookly.mailing-recipients.show', function (event, mailing_list) {
            ml.list_id = mailing_list.id;
            mr.$list_name.html(mailing_list.name);
            switchView('mailing_recipients');
        });

        const ml_table = 'sms_mailing_lists';
        // Server (Ajax::getMailingList) searches only by name and id.
        const ml_searchableColumns = ['name', 'id'];
        $.each(BooklyL10n.datatables[ml_table].settings.columns, function (column, show) {
            ml.columns.push({
                data: column,
                render: function (data) { return BooklyDatatables.escapeHtml(data); }
            });
            ml.columns[ml.columns.length - 1].title = BooklyL10n.datatables[ml_table].titles[column] || column;
            ml.columns[ml.columns.length - 1].name = column;
            ml.columns[ml.columns.length - 1].show = show;
            ml.columns[ml.columns.length - 1].searchable = ml_searchableColumns.indexOf(column) !== -1;
        });

        ml.dt = BooklyDatatables.showForm('bookly-' + ml_table + '-datatables', {
            ajax: {
                url: ajaxurl,
                method: 'POST',
                data: function (d) {
                    return $.extend({
                        action: 'bookly_get_mailing_list',
                        csrf_token: BooklyL10nGlobal.csrf_token,
                    }, d);
                }
            },
            columns: ml.columns,
            tableSettings: Object.assign({}, BooklyL10n.datatables[ml_table], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
            edit: function (row) {
                $(document.body).trigger('bookly.mailing-recipients.show', [row]);
            },
            checked: function () {
                return [{
                    label: BooklyL10n.delete,
                    icon: 'trash',
                    variant: 'destructive',
                    click: function (selected) {
                        if (!confirm(BooklyL10n.areYouSure)) return;
                        ml.dt.setLoading(true);
                        $.ajax({
                            url: ajaxurl,
                            method: 'POST',
                            data: {
                                action: 'bookly_delete_mailing_lists',
                                csrf_token: BooklyL10nGlobal.csrf_token,
                                ids: selected.map(function (row) { return row.id; })
                            },
                            dataType: 'json',
                            success: function (response) {
                                if (response.success) {
                                    ml.dt.reload();
                                } else {
                                    ml.dt.setLoading(false);
                                    alert(response.data.message);
                                }
                            },
                            error: function () { ml.dt.setLoading(false); }
                        });
                    }
                }];
            },
            saveSettings: function (settings) {
                $.post(ajaxurl, Object.assign({
                    action: 'bookly_update_table_settings',
                    table: ml_table,
                    csrf_token: BooklyL10nGlobal.csrf_token
                }, settings));
            },
            topToolbar: [{
                label: BooklyL10n.new_mailing_list,
                icon: 'plus',
                variant: 'default',
                click: function () {
                    const event = new CustomEvent('bookly:create-mailing-list');
                    window.dispatchEvent(event);
                }
            }],
            searchFilter: { placeholder: BooklyL10n.quick_search, name: 'filter[search]' }
        });

        /**
         * Mailing recipients.
         */
        const mr_table = 'sms_mailing_recipients_list';
        // Server (Ajax::getMailingRecipients) searches only by name and phone.
        const mr_searchableColumns = ['name', 'phone'];
        $.each(BooklyL10n.datatables[mr_table].settings.columns, function (column, show) {
            mr.columns.push({
                data: column,
                render: function (data) { return BooklyDatatables.escapeHtml(data); }
            });
            mr.columns[mr.columns.length - 1].title = BooklyL10n.datatables[mr_table].titles[column] || column;
            mr.columns[mr.columns.length - 1].name = column;
            mr.columns[mr.columns.length - 1].show = show;
            mr.columns[mr.columns.length - 1].searchable = mr_searchableColumns.indexOf(column) !== -1;
        });

        function switchView(view) {
            if (view === 'mailing_lists') {
                $mr_container.hide();
                $ml_container.show();
                ml.dt.reload();
            } else {
                $ml_container.hide();
                if (mr.dt === null) {
                    mr.dt = BooklyDatatables.showForm('bookly-' + mr_table + '-datatables', {
                        ajax: {
                            url: ajaxurl,
                            method: 'POST',
                            data: function (d) {
                                return $.extend({
                                    action: 'bookly_get_mailing_recipients',
                                    csrf_token: BooklyL10nGlobal.csrf_token,
                                    mailing_list_id: ml.list_id,
                                }, d);
                            }
                        },
                        columns: mr.columns,
                        tableSettings: Object.assign({}, BooklyL10n.datatables[mr_table], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
                        checked: function () {
                            return [{
                                label: BooklyL10n.delete,
                                icon: 'trash',
                                variant: 'destructive',
                                click: function (selected) {
                                    if (!confirm(BooklyL10n.areYouSure)) return;
                                    mr.dt.setLoading(true);
                                    $.ajax({
                                        url: ajaxurl,
                                        method: 'POST',
                                        data: {
                                            action: 'bookly_delete_mailing_recipients',
                                            csrf_token: BooklyL10nGlobal.csrf_token,
                                            ids: selected.map(function (row) { return row.id; })
                                        },
                                        dataType: 'json',
                                        success: function (response) {
                                            if (response.success) {
                                                mr.dt.reload();
                                            } else {
                                                mr.dt.setLoading(false);
                                                alert(response.data.message);
                                            }
                                        },
                                        error: function () { mr.dt.setLoading(false); }
                                    });
                                }
                            }];
                        },
                        saveSettings: function (settings) {
                            $.post(ajaxurl, Object.assign({
                                action: 'bookly_update_table_settings',
                                table: mr_table,
                                csrf_token: BooklyL10nGlobal.csrf_token
                            }, settings));
                        },
                        topToolbar: [
                            {
                                label: BooklyL10n.back_to_lists,
                                icon: 'arrow-left',
                                variant: 'outline',
                                click: function () { switchView('mailing_lists'); }
                            },
                            {
                                label: BooklyL10n.new_recipients,
                                icon: 'plus',
                                variant: 'default',
                                click: function () {
                                    BooklyAddRecipientsDialog.showDialog(ml.list_id, function () { mr.dt.reload(); });
                                }
                            }
                        ],
                        searchFilter: { placeholder: BooklyL10n.quick_search, name: 'filter[search]' }
                    });
                } else {
                    mr.dt.reload(null);
                }
                $mr_container.show();
            }
        }
    });

    /**
     * SMS Details Tab.
     */
    $('#sms_details').one('bookly:tab-show', function () {
        const detailsTable = 'sms_details';
        let detailsBt;

        function resendSms(ids) {
            if (!ids.length) return;
            detailsBt.setLoading(true);
            $.ajax({
                url: ajaxurl,
                data: {
                    action: 'bookly_resend_sms',
                    csrf_token: BooklyL10nGlobal.csrf_token,
                    ids: ids,
                },
                dataType: 'json',
                success: function (response) {
                    if (response.success) {
                        booklyAlert({ success: [response.message] });
                    } else {
                        booklyAlert({ error: [response.message] });
                    }
                    detailsBt.reload();
                },
                error: function () { detailsBt.setLoading(false); }
            });
        }

        const tz = getLocalTimeZone();
        const t = today(tz);
        const startOfMonth = d => d.set({ day: 1 });
        const endOfMonth = d => d.set({ day: 1 }).add({ months: 1 }).subtract({ days: 1 });
        const ymd = d => d.year + '-' + String(d.month).padStart(2, '0') + '-' + String(d.day).padStart(2, '0');

        const datePresets = [
            { label: BooklyL10n.dateRange.yesterday, range: { start: t.subtract({ days: 1 }),  end: t.subtract({ days: 1 }) } },
            { label: BooklyL10n.dateRange.today,     range: { start: t,                        end: t                       } },
            { label: BooklyL10n.dateRange.last_7,    range: { start: t.subtract({ days: 7 }),  end: t                       } },
            { label: BooklyL10n.dateRange.last_30,   range: { start: t.subtract({ days: 30 }), end: t                       } },
            { label: BooklyL10n.dateRange.thisMonth, range: { start: startOfMonth(t),                                  end: endOfMonth(t)                                 } },
            { label: BooklyL10n.dateRange.lastMonth, range: { start: startOfMonth(t.subtract({ months: 1 })),          end: endOfMonth(t.subtract({ months: 1 }))         } },
        ];

        let dateValue;
        const savedFilter = BooklyL10n.datatables[detailsTable].settings.filter || {};
        if (savedFilter.range && savedFilter.range !== 'any') {
            const parts = String(savedFilter.range).split(' - ');
            if (parts.length === 2) {
                try { dateValue = { start: parseDate(parts[0].trim()), end: parseDate(parts[1].trim()) }; } catch (e) { /* ignore */ }
            }
        }
        function serializeDate(value) {
            if (!value || !value.start || !value.end) return 'any';
            return ymd(value.start) + ' - ' + ymd(value.end);
        }

        // SMS.php defaults any unrecognized code to the "Error" label, so unknown
        // codes are routed to red rather than the neutral gray fallback.
        const smsErrorBadgeClass = 'bookly:bg-red-100 bookly:text-red-800 bookly:border-red-200';
        // Tailwind classes per SMS status code (lib/cloud/SMS.php:158).
        const smsStatusBadgeClass = {
            1:  'bookly:bg-amber-100 bookly:text-amber-800 bookly:border-amber-200', // Queued
            10: 'bookly:bg-amber-100 bookly:text-amber-800 bookly:border-amber-200', // Queued
            11: 'bookly:bg-blue-100 bookly:text-blue-800 bookly:border-blue-200',    // Sending
            12: 'bookly:bg-blue-100 bookly:text-blue-800 bookly:border-blue-200',    // Sent
            13: 'bookly:bg-green-100 bookly:text-green-800 bookly:border-green-200', // Delivered
            15: 'bookly:bg-amber-100 bookly:text-amber-800 bookly:border-amber-200', // Undelivered
            2:  smsErrorBadgeClass, // Error
            16: smsErrorBadgeClass, // Error
            3:  smsErrorBadgeClass, // Out of credit
            4:  smsErrorBadgeClass, // Country out of service
            5:  smsErrorBadgeClass, // Blocked
            14: smsErrorBadgeClass, // Failed
        };

        const columns = [];
        $.each(BooklyL10n.datatables[detailsTable].settings.columns, function (column, show) {
            switch (column) {
                case 'message':
                    columns.push({
                        data: column,
                        render: function (data) {
                            return BooklyDatatables.escapeHtml(data).replaceAll('&lt;br /&gt;', '<br/>');
                        }
                    });
                    break;
                case 'status':
                    columns.push({
                        data: column,
                        render: function (data) { return BooklyDatatables.escapeHtml(data); },
                        badge: function (row) { return smsStatusBadgeClass[row.status_code] || smsErrorBadgeClass; },
                    });
                    break;
                default:
                    columns.push({
                        data: column,
                        render: function (data) { return BooklyDatatables.escapeHtml(data); }
                    });
            }
            columns[columns.length - 1].title = BooklyL10n.datatables[detailsTable].titles[column] || column;
            columns[columns.length - 1].name = column;
            columns[columns.length - 1].show = show;
            columns[columns.length - 1].orderable = false;
        });

        if (columns.length) {
            detailsBt = BooklyDatatables.showForm('bookly-' + detailsTable + '-datatables', {
                datePicker: BooklyL10n.datePicker,
                ajax: {
                    url: ajaxurl,
                    method: 'POST',
                    data: function (d) {
                        return $.extend({}, d, {
                            action: 'bookly_get_sms_list',
                            csrf_token: BooklyL10nGlobal.csrf_token,
                            filter: { range: serializeDate(dateValue) }
                        });
                    }
                },
                columns: columns,
                tableSettings: Object.assign({}, BooklyL10n.datatables[detailsTable], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
                rowActions: function (row) {
                    if (!row.resend) return [];
                    return [{
                        label: BooklyL10n.resend,
                        icon: 'send',
                        variant: 'outline',
                        click: function (r) { resendSms([r.id]); }
                    }];
                },
                checked: function (rows) {
                    const resendable = rows.filter(function (row) { return row.resend; });
                    if (resendable.length < 2) return [];
                    return [{
                        label: BooklyL10n.resend + ' (' + resendable.length + ')',
                        icon: 'send',
                        variant: 'outline',
                        click: function () { resendSms(resendable.map(function (row) { return row.id; })); }
                    }];
                },
                saveSettings: function (settings) {
                    $.post(ajaxurl, Object.assign({
                        action: 'bookly_update_table_settings',
                        table: detailsTable,
                        csrf_token: BooklyL10nGlobal.csrf_token
                    }, settings));
                },
                filters: [{
                    type: 'dateRange',
                    name: 'date',
                    label: BooklyL10n.filters.date,
                    initialValue: dateValue,
                    presets: datePresets,
                    onChange: function (v) { dateValue = v; },
                }],
            });
        }
    });

    /**
     * Prices Tab.
     */
    const pricesTable = 'sms_prices';
    function formatPrice(number) {
        number = number.replace(/0+$/, '');
        if ((number + '').split('.')[1].length === 1) {
            return '$' + number + '0';
        }
        return '$' + number;
    }

    let prices_columns = [];
    $.each(BooklyL10n.datatables[pricesTable].settings.columns, function (column, show) {
        switch (column) {
            case 'country_iso_code':
                prices_columns.push({
                    data: column,
                    class: 'bookly:w-8',
                    render: function (data) {
                        return '<span class="iti__flag iti__' + data + ' bookly:inline-block bookly:align-middle"></span>';
                    }
                });
                break;
            case 'price':
                prices_columns.push({
                    data: column,
                    class: 'bookly:text-right',
                    render: function (data) { return formatPrice(data); }
                });
                break;
            case 'price_alt':
                prices_columns.push({
                    data: column,
                    class: 'bookly:text-right',
                    render: function (data, type, row) {
                        if (row.price_alt === '') return BooklyL10n.na;
                        return formatPrice(data);
                    }
                });
                break;
            default:
                prices_columns.push({
                    data: column,
                    render: function (data) { return BooklyDatatables.escapeHtml(data); }
                });
                break;
        }
        prices_columns[prices_columns.length - 1].title = BooklyL10n.datatables[pricesTable].titles[column] || column;
        prices_columns[prices_columns.length - 1].name = column;
        prices_columns[prices_columns.length - 1].show = show;
    });

    if (prices_columns.length) {
        BooklyDatatables.showForm('bookly-' + pricesTable + '-datatables', {
            ajax: {
                url: ajaxurl,
                method: 'POST',
                data: function (d) {
                    return $.extend({}, d, { action: 'bookly_get_price_list', csrf_token: BooklyL10nGlobal.csrf_token });
                },
                dataSrc: 'list'
            },
            serverSide: false,
            reloadButton: false,
            noCheckboxes: true,
            columns: prices_columns,
            tableSettings: Object.assign({}, BooklyL10n.datatables[pricesTable], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
            saveSettings: function (settings) {
                $.post(ajaxurl, Object.assign({
                    action: 'bookly_update_table_settings',
                    table: pricesTable,
                    csrf_token: BooklyL10nGlobal.csrf_token
                }, settings));
            },
            searchFilter: { placeholder: BooklyL10n.quick_search, name: 'filter' }
        });
    }

    /**
     * Sender ID Tab.
     */
    $('#sender_id').one('bookly:tab-show', function () {
        var countries = null,
            countriesNoregLabel = '',
            countries_pending = [],
            dt_sender_id;

        const senderTable = 'sms_sender';
        const allStatusValues = ['0', '1', '2', '3'];
        // Default empty (== "no filter"); persisted "all checked" also collapses to [] via
        // CheckboxGroupFilter's normalizeAllAsEmpty. Keeps visual state stable across reloads.
        let statusValue = [];

        const savedSenderFilter = BooklyL10n.datatables[senderTable].settings.filter || {};
        if (Array.isArray(savedSenderFilter.status) && savedSenderFilter.status.length) {
            statusValue = savedSenderFilter.status.map(String);
        }

        const defaultBadgeClass = 'bookly:bg-gray-100 bookly:text-gray-700 bookly:border-gray-200';
        const senderStatusBadgeClass = {
            0: 'bookly:bg-amber-100 bookly:text-amber-800 bookly:border-amber-200', // pending
            1: 'bookly:bg-green-100 bookly:text-green-800 bookly:border-green-200', // approved
            2: 'bookly:bg-red-100 bookly:text-red-800 bookly:border-red-200',       // declined
            3: defaultBadgeClass,                                                   // cancelled
        };

        const columns = [];
        $.each(BooklyL10n.datatables[senderTable].settings.columns, function (column, show) {
            switch (column) {
                case 'name':
                    columns.push({
                        data: column,
                        render: function (data) {
                            if (data === null) return '<i>' + BooklyL10n.default + '</i>';
                            return BooklyDatatables.escapeHtml(data);
                        }
                    });
                    break;
                case 'country':
                    columns.push({
                        data: column,
                        render: function (data) {
                            if (data) return BooklyDatatables.escapeHtml(data);
                            // noreg country: show the localized "{N} countries"
                            // label (rendered server-side via _n()) once the
                            // country list has loaded, "…" while waiting.
                            if (!countriesNoregLabel) return '…';
                            return BooklyDatatables.escapeHtml(countriesNoregLabel);
                        },
                        popover: function (row) {
                            if (row.country) return null;
                            if (!countries) return null;
                            var noreg = countries.filter(function (c) { return !c.custom_request_procedure; });
                            if (!noreg.length) return null;
                            var chips = noreg.map(function (c) {
                                return '<span class="bookly:inline-flex bookly:items-center bookly:gap-1 bookly:rounded-md bookly:border bookly:border-green-200 bookly:bg-white bookly:px-1.5 bookly:py-0.5 bookly:text-xs bookly:text-green-900/80">'
                                    + '<span class="iti__flag iti__' + c.country_iso_code + '"></span>'
                                    + BooklyDatatables.escapeHtml(c.country_name)
                                    + '</span>';
                            }).join(' ');
                            return '<div class="bookly:flex bookly:flex-wrap bookly:gap-1">' + chips + '</div>';
                        },
                        popoverHtml: true,
                        popoverLink: true,
                        popoverClass: 'bookly:max-w-lg',
                    });
                    break;
                case 'status':
                    columns.push({
                        data: column,
                        badge: function (row) { return senderStatusBadgeClass[row.status_code] || defaultBadgeClass; },
                    });
                    break;
                default:
                    columns.push({
                        data: column,
                        render: function (data) { return BooklyDatatables.escapeHtml(data); }
                    });
            }
            columns[columns.length - 1].title = BooklyL10n.datatables[senderTable].titles[column] || column;
            columns[columns.length - 1].name = column;
            columns[columns.length - 1].orderable = false;
            columns[columns.length - 1].show = show;
        });

        function cancelSenderIds(statusCode) {
            if (!confirm(BooklyL10n.areYouSure)) return;
            dt_sender_id.setLoading(true);
            $.ajax({
                method: 'POST',
                url: ajaxurl,
                data: {
                    action: 'bookly_cancel_sender_id',
                    csrf_token: BooklyL10nGlobal.csrf_token,
                    ids: dt_sender_id.getCheckedRows()
                        .filter(function (row) { return row.status_code === statusCode; })
                        .map(function (row) { return row.id; }),
                },
                dataType: 'json',
                success: function (response) {
                    if (response.success) {
                        dt_sender_id.reload();
                    } else {
                        if (response.data && response.data.message) {
                            booklyAlert({ error: [response.data.message] });
                        }
                        dt_sender_id.setLoading(false);
                    }
                },
                error: function () { dt_sender_id.setLoading(false); }
            });
        }

        if (columns.length) {
            dt_sender_id = BooklyDatatables.showForm('bookly-' + senderTable + '-datatables', {
                ajax: {
                    url: ajaxurl,
                    method: 'POST',
                    data: function (d) {
                        return $.extend({}, d, {
                            action: 'bookly_get_sender_ids_list',
                            csrf_token: BooklyL10nGlobal.csrf_token,
                            filter: { status: statusValue.length === allStatusValues.length ? [] : statusValue }
                        });
                    },
                    dataSrc: 'list'
                },
                // Client-side filter: empty or full statusValue means "show all".
                clientFilter: function (row) {
                    if (!statusValue.length || statusValue.length === allStatusValues.length) return true;
                    return statusValue.indexOf(String(row.status_code)) !== -1;
                },
                serverSide: false,
                columns: columns,
                checked: function (rows) {
                    const actions = [];
                    const approved = rows.filter(function (row) { return row.status_code === 1; });
                    const pending = rows.filter(function (row) { return row.status_code === 0; });
                    if (approved.length > 0) {
                        actions.push({
                            label: BooklyL10n.sender_id.cancel_sender_id,
                            icon: 'ban',
                            variant: 'destructive',
                            click: function () { cancelSenderIds(1); }
                        });
                    }
                    if (pending.length > 0) {
                        actions.push({
                            label: BooklyL10n.sender_id.cancel,
                            icon: 'ban',
                            variant: 'destructive',
                            click: function () { cancelSenderIds(0); }
                        });
                    }
                    return actions;
                },
                tableSettings: Object.assign({}, BooklyL10n.datatables[senderTable], { l10n: Object.assign({}, BooklyL10n.datatables.l10n, { zeroRecords: BooklyL10n.zeroRecords }) }),
                saveSettings: function (settings) {
                    $.post(ajaxurl, Object.assign({
                        action: 'bookly_update_table_settings',
                        table: senderTable,
                        csrf_token: BooklyL10nGlobal.csrf_token
                    }, settings));
                },
                searchFilter: { placeholder: BooklyL10n.quick_search, name: 'filter' },
                filters: [{
                    type: 'checkboxGroup',
                    name: 'status',
                    label: BooklyL10n.filters.status,
                    initialValue: statusValue,
                    options: [
                        { value: '0', label: BooklyL10n.sender_id.status_pending  || 'Pending' },
                        { value: '1', label: BooklyL10n.sender_id.status_approved || 'Approved' },
                        { value: '2', label: BooklyL10n.sender_id.status_declined || 'Declined' },
                        { value: '3', label: BooklyL10n.sender_id.status_cancelled|| 'Cancelled' },
                    ],
                    onChange: function (v) { statusValue = v; },
                }],
                topToolbar: [{
                    id: 'bookly-request-sender_id',
                    label: BooklyL10n.sender_id.request,
                    icon: 'plus',
                    variant: 'default',
                    click: function () { ensureCountries(openRequestModal); }
                }],
            });
        }

        // Fetch the Sender ID country list once and cache it. The cached list
        // is used both by the Request Sender ID modal and by the country-cell
        // popover that lists noreg-group countries on each table row.
        // Concurrent callers queue up behind a single in-flight request.
        function ensureCountries(callback) {
            if (countries) {
                callback(countries);
                return;
            }
            countries_pending.push(callback);
            if (countries_pending.length > 1) return;
            $.ajax({
                url: ajaxurl,
                data: { action: 'bookly_get_sender_id_countries', csrf_token: BooklyL10nGlobal.csrf_token },
                dataType: 'json',
                success: function (response) {
                    var pending = countries_pending;
                    countries_pending = [];
                    if (response.list && response.list.length) {
                        countries = response.list;
                        countriesNoregLabel = response.noreg_label || '';
                        pending.forEach(function (cb) { cb(countries); });
                    }
                },
                error: function () { countries_pending = []; }
            });
        }

        // Pre-load countries so the country-cell popover has data on the very
        // first render. Reload the table once data arrives so noreg cells
        // switch from "…" to "{N} countries".
        ensureCountries(function () { if (dt_sender_id) dt_sender_id.reload(); });

        function openRequestModal(list) {
            BooklySenderIdModal.showForm('bookly-sender-id-modal-root', {
                countries: list,
                l10n: BooklyL10n.sender_id_modal,
                onSubmit: function (payload) {
                    return new Promise(function (resolve, reject) {
                        $.ajax({
                            url: ajaxurl,
                            method: 'POST',
                            data: {
                                action: 'bookly_request_sender_id',
                                csrf_token: BooklyL10nGlobal.csrf_token,
                                sender_id: payload.sender_id,
                                country: payload.country,
                                document_code: payload.document_code
                            },
                            dataType: 'json',
                            success: function (response) {
                                if (response.success) {
                                    booklyAlert({ success: [BooklyL10n.sender_id.sent] });
                                    dt_sender_id.reload();
                                    resolve(response);
                                } else {
                                    reject(new Error(response.data && response.data.message ? response.data.message : ''));
                                }
                            },
                            error: function () { reject(new Error('')); }
                        });
                    });
                }
            });
        }

        // Eager load so the footnote appears without opening the modal.
        ensureCountries(function () {});
    });

    /**
     * Tabs nav.
     */
    const $sms_tabs = $('#sms_tabs');
    const $sms_content = $('#sms_tabs_content');
    $sms_tabs.on('click', 'li', function (e) {
        e.preventDefault();
        $('li a', $sms_tabs).removeClass('bookly:active');
        $(this).find('a').addClass('bookly:active');
        $('>', $sms_content).removeClass('bookly:active');
        var $target = $sms_content.find($(this).find('a').attr('href'));
        $target.addClass('bookly:active').trigger('bookly:tab-show');
    });

    $sms_tabs.find('[href="#' + BooklyL10n.current_tab + '"]').closest('li').click();
});
