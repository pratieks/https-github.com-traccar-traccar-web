/*
 * Copyright 2017 Anton Tananaev (anton@traccar.org)
 * Copyright 2017 Andrey Kunitsyn (andrey@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.permissions.Notifications', {
    extend: 'Traccar.view.permissions.Base',
    xtype: 'linkNotificationsView',

    requires: [
        'Ext.grid.filters.Filters'
    ],

    plugins: 'gridfilters',

    columns: {
        items: [{
            text: Strings.notificationType,
            dataIndex: 'type',
            flex: 2,
            renderer: function (value) {
                return Traccar.app.getEventString(value);
            },
            filter: {
                type: 'list',
                idField: 'type',
                labelField: 'name',
                store: 'AllNotificationTypes'
            }
        }, {
            text: Strings.notificationAlways,
            dataIndex: 'always',
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal,
            renderer: Traccar.AttributeFormatter.getFormatter('always'),
            filter: 'boolean'
        }, {
            text: Strings.notificationWeb,
            dataIndex: 'web',
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal,
            renderer: Traccar.AttributeFormatter.getFormatter('web'),
            filter: 'boolean'
        }, {
            text: Strings.notificationMail,
            dataIndex: 'mail',
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal,
            renderer: Traccar.AttributeFormatter.getFormatter('mail'),
            filter: 'boolean'
        }, {
            text: Strings.notificationSms,
            dataIndex: 'sms',
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal,
            renderer: Traccar.AttributeFormatter.getFormatter('sms'),
            filter: 'boolean'
        }]
    }
});
